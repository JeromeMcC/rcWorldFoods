const sequelize = require('../config/connection');
const { User, Grocery, Order } = require('../models');

const groceryData = require('./groceryData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const groceries = await Grocery.bulkCreate (
    groceryData, {
      returning: true,
    });
  const orders = await Order.bulkCreate (
    orderData, {
      individualHooks: true,
      returning: true,
    });

  for (const users of userData){
    const newOrder = await Order.create({
      user_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();