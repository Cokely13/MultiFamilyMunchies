//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Item = require('./models/Item')
const List = require('./models/List')
const Vote = require('./models/Vote')
const ListItem = require('./models/ListItem')

//associations could go here!
User.hasMany(List)
List.belongsTo(User)
User.hasMany(Vote)
Vote.belongsTo(User)

Item.belongsToMany(List, { through: 'ListItem' });
List.belongsToMany(Item, { through: 'ListItem' });



module.exports = {
  db,
  models: {
    User,
    Item,
    List,
    Vote,
    ListItem
  },
}
