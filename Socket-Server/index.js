'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const messageQueue = new Queue();

// server singleton
const server = new Server();

// create namespace
const jjmr = server.of('/jjmr');

server.use(cors());

// create / allow for connections
jjmr.on('connection', (socket) => {
  console.log('Connect to the jjmr namespace', socket.id);

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

  socket.on('PART_REQUEST_REVIEWED', (payload) => {
    socket.broadcast.emit('PART_REQUEST_REVIEWED', payload);
  });

  socket.on('PRODUCT_PICKED_UP', (payload) => {
    socket.broadcast.emit('PRODUCT_PICKED_UP', payload);
  });
  socket.on('PARTS_DELIVERED', (payload) => {
    socket.broadcast.emit('PARTS_DELIVERED', payload);
  });
});



console.log('listening on port', PORT);
server.listen(PORT);