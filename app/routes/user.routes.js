const express = require("express");
const { create, login, getOne } = require("../controller/user.controller");
const isAuth = require("../utils/auth");

const router = express.Router();

router.post("/", create);
router.post("/login", login);
router.get("/", isAuth, getOne);

module.exports = router;
