const express = require('express');

const router = express.Router()
const homeController = require('../controllers/home_controller')
const userController = require('../controllers/user_controller')

console.log('router loaded')

router.get('/', homeController.index);
router.get('/about-us', homeController.about_us);
router.use('/users', require('./users'));

module.exports = router