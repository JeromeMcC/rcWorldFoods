const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grocery extends Model {}

Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      PrimaryKey: true,
      autoIncrement: true,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_image: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    reezeTableName: true,
    underscored: true,
    modelName: 'grocery',
  }
);

module.exports = Grocery;