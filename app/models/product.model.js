const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    power_generated: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Product.sync({ alter: true }).then(() =>
  console.log("Products table cereated...")
);

module.exports = {
    Product,
};
