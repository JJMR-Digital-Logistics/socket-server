'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const partsModel = require('./parts/model.js');
const Collection = require('./data-collection.js');

const userModel = require('../Auth/models/users.js');

//const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory' 
  : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const parts = partsModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

//users: userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  parts: new Collection(parts),
  users,
};
