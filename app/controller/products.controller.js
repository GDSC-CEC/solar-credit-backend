const { Product } = require("../models/product.model");

const create = async (req, res) => {
  try {
    const nProduct = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      data: nProduct,
      message: "Product created sucessfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const fProducts = await Product.findAll({});

    return res.status(200).json({
        success: true,
        message: 'Products',
        data: fProducts
    })
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
    const fProducts = await Product.findOne(req.body);

    return res.status(200).json({
        success: true,
        message: 'Product',
        data: fProducts
    })
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
  getAll,
  getOne,
};
