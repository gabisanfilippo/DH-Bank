const express = require('express')
const routes = express.Router()

const usersController = require('../controllers/usersController')

routes.get("/register", usersController.registerShow)

module.exports = routes