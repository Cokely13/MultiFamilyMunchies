const Sequelize = require('sequelize')
const db = require('../db')


const Vote= db.define('Vote', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  listItem_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
    date: {
      type: Sequelize.DATEONLY,
      defaultValue: DATEONLY
    },
    confirm: {
      type: Sequelize.ENUM('confirm', 'deny', 'abstain'),
      defaultValue: 'abstain'
    }

  });


module.exports = Vote
