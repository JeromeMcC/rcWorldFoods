const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');

User.hasMany(Order),

Order.belongsTo(User),

Order.hasMany(Product),

module.exports = {User,Product, Order};