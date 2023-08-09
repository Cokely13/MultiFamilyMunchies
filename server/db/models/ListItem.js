const Sequelize = require('sequelize')
const db = require('../db')


const ListItem = db.define('ListItem', {
    list_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    confirmed: {
      type: Sequelize.ENUM('confirmed', 'denied', 'pending'),
      defaultValue: 'pending'
    }

  });


module.exports = ListItem
