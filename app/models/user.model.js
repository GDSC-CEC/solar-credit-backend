const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define(
  "User",
  {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
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
  }
);

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = {
  User,
};
