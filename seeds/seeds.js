const sequelize = require('../config/connection');
const { User, Grocery, Order } = require('../models');

const groceryData = require('./groceryData.json');
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
  await Grocery.bulkCreate (
    groceryData, {
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