'use strict';

const Chance = require('chance');

const chance = new Chance();

const partRequest = (socket, order = null) => {
  if (!order) {
    order = {
      id: chance.guid(),
      partName: chance.name(),
      partQuantity: chance.integer({ min: 1, max: 100 }),
      partID: chance.guid(),
    };
  }

  let payload = {
    event: 'NEW_PART_REQUEST',
    messageId: order.id,
    order,
  };

  console.log(`Worker: Order request for ${payload.order.id} submitted.`);
  socket.emit('NEW_PART_REQUEST', payload);
};

module.exports = { partRequest };
