'use strict';

// const { io } = require('socket.io-client');

// const socket = io('http://localhost:3001/jjmr');

const { socket, io } = require('');
const { partRequest } = require('./handler');







setInterval(() => {
  partRequest(socket);
}, 5000);
