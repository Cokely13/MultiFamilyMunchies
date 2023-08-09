const Sequelize = require('sequelize')
const db = require('../db')


const Food = db.define('Food', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
    },

  });


module.exports = Food
