'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const messageQueue = new Queue();

// server singleton
const server = new Server();

// create namespace
const jjmr = server.of('/jjmr');

// create / allow for connections
jjmr.on('connection', (socket) => {
  console.log('connect to the jjmr namespace', socket.id);

  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('EVENT:', { event, time, payload });
  });

  socket.on('JOIN', (room) => {
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('these are the rooms', socket.adapter.rooms);
  });

  socket.on('NEW_PART_REQUEST', (payload) => {
    socket.broadcast.emit('NEW_PART_REQUEST', payload);
  });














  // socket.on('PART_REQUEST_REVIEWED', (payload) => {
  //   socket.broadcast.emit('PART_REQUEST_REVIEWED', payload)
  // });

  // socket.on('PRODUCT_PICKED_UP', (payload) => {
  //   socket.broadcast.emit('PRODUCT_PICKED_UP', payload)
  // });


































  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Message event', payload);

    // manage queue
    // messageQueue is the single queue for the entire system
    // current queue will be nested within and the specific queue for our room (flowers or widgets)
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue) {
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
      // first time currentQueue = {};
    }
    currentQueue.store(payload.messageId, payload);

    socket.broadcast.emit('MESSAGE', payload);
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    // maybe I just want to send queue data to a single room:  
    // ie. flowers or widgets
    // socket.to(payload.queueId).emit('RECEIVED', payload);
    //this might be useful?  maybe?
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue) {
      throw new Error('we have messages but no queue');
    }

    let message = currentQueue.remove(payload.messageId);

    socket.broadcast.emit('RECEIVED', message);
  });

  socket.on('GET-MESSAGES', (payload) => {
    console.log('attempting to get messages');
    let currentQueue = messageQueue.read(payload.queueId);
    if (currentQueue && currentQueue.data) {
      Object.keys(currentQueue.data).forEach(messageId => {
        socket.emit('MESSAGE', currentQueue.read(messageId));
      });

    }
  });

});



console.log('listening on port', PORT);
server.listen(PORT);