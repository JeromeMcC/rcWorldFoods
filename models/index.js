const User = require('./User');
const Grocery = require('./Grocery');
const Order = require('./Order');

User.hasMany(Order),

Order.belongsTo(User),

Order.hasMany(Grocery),

module.exports = {User,Grocery, Order};