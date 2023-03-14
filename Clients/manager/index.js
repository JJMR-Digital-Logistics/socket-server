'use strict';

// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/jjmr');

const socket = require('../socket.js');

socket.on('NEW_PART_REQUEST', (payload) => {
  setTimeout(() => {

    console.log('MANANGER: PART_REQUEST_REVIEWED.', payload);
    socket.emit('PART_REQUEST_REVIEWED', payload);
  }, 1000);

//   setTimeout(() => {
//     console.log('MANANGER:');
//     socket.emit('DELIVERED', {...payload, event: 'DELIVERED'});
//   }, 2000);
});