'use strict';

const partsModel = (sequelize, DataTypes) => sequelize.define('Parts', {
  name: { type: DataTypes.STRING, required: true },
  quantity: { type: DataTypes.INTEGER, required: true },
  description: { type: DataTypes.STRING, required: false },
  manufacturer: { type: DataTypes.STRING, required: false },
  color: { type: DataTypes.STRING, required: false },
});

module.exports = partsModel;