'use strict';

const Chance = require('chance');

const chance = new Chance();

const partRequest = (socket, payload = null) => {
  if (!payload) {
    payload = {
      orderID: chance.guid(),
      partName: chance.name(),
      partQuantity: chance.integer({ min: 1, max: 100 }),
      partID: chance.guid(),
    };
  }

  socket.emit('JOIN', payload.orderID);
  socket.emit('NEW_PART_REQUEST', payload);

  console.log(`Worker: Order request for ${payload.orderID} submitted.`);
};

const partRequestFilled = (payload) => {
  console.log(`Worker: Order request for ${payload.orderID} filled.`);
};


module.exports = { partRequest, partRequestFilled };
