const { Sequelize } = require("sequelize");

// connecting to mysql
const sequelize = new Sequelize({
  database: "gcc-cloud",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("DB connection sucessfuly established");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;