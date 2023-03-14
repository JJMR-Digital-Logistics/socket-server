'use strict';

const socket = require('../socket.js');


socket.on('NEW_PART_REQUEST', (product) => {
  socket.emit('PRODUCT_PICKED_UP', product);

  console.log('VENDOR: Parts picked up');
  setTimeout(() => {
    socket.emit('PARTS_DELIVERED', product);
    console.log('VENDOR: Parts were delivered');
  }, 2000);
});
