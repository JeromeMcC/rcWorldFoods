const sequelize = require('../config/connection');
const { User, Product, Order } = require('../models');

const productData = require('./productData.json');
const userData = require('./userData.json');

const orderData = require('./orderData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('database synced');
  await User.bulkCreate ( userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('user table created');
  await Product.bulkCreate (
    productData, {
      returning: true,
    });
  await Order.bulkCreate (
    orderData, {
      individualHooks: true,
      returning: true,
    });



  process.exit(0);
};

seedDatabase();