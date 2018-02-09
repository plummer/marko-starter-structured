const express = require('express');
const router = express.Router();

const template = require('../marko/templates/index');
const indexController = require('../controllers/indexController');

router.get('/', indexController.getIndex);

module.exports = router