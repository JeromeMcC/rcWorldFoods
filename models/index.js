const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');


User.hasMany(Order),


Order.belongsTo(User,{
  foreignKey:'user_id',
}),

Order.hasMany(Product),

//Product.belongsToMany(Order, {
  //through: {
    //model: User,
    //unique: false
  //},
  //as: 'ordered_products'
//}),

module.exports = {User,Product, Order};