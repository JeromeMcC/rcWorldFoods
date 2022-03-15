const User = require('./User');
const Grocery = require('./Grocery');
const Order = require('./Order');

User.hasMany(Order,{
  foreginKey: user_id
});

Order.belongsTo(User, {
  foreginKey: user_id
});

Order.hasMany(Grocery,{
  foreginKey:user_id
});

module.exports = {User,Grocery, Order};