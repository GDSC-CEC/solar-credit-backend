const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  try {
    const data = req.body;
    const isExists = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (isExists) {
      throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    const nUser = await User.create(data);

    return res.status(201).json({
      success: true,
      message: "user sucessfully created",
      data: nUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    const isEmail = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (!isEmail) {
      throw new Error("Email not found");
    }

    const isPasswordMatched = await bcrypt.compare(
      data.password,
      isEmail.password
    );

    if (!isPasswordMatched) {
      throw new Error("Password not matched");
    }

    const token = jwt.sign(
      {
        id: isEmail.id,
        email: isEmail.email,
        full_name: isEmail.full_name,
      },
      "abcefg",
      {
        expiresIn: "30d",
      }
    );

    return res.status(200).json({
      data: {
        id: isEmail.id,
        email: isEmail.email,
        full_name: isEmail.full_name,
        token,
      },
      message: "user sucessfully login",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getOne = async (req, res) => {
  try {
    console.log(req.user);
    const fUser = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (!fUser) {
      throw new Error("User not found");
    }

    return res.status(200).json({
      success: true,
      message: "User",
      data: fUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  create,
  login,
  getOne
};
