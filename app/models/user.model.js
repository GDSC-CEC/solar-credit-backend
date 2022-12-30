const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define(
  "User",
  {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

User.sync({ alter: true }).then(() => console.log('User table created'));

module.exports = {
  User,
};
