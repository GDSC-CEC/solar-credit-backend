const express = require('express');
const { create, getAll, getOne } = require('../controller/products.controller');

const router = express.Router();

router.post('/', create);
router.get('/', getAll)
router.post('/search', getOne)

module.exports = router;