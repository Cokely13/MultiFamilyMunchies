const Sequelize = require('sequelize')
const db = require('../db')


const List = db.define('List', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW
    }

  });


module.exports = List
