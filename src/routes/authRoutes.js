const express = require("express")
const router = express.Router()
const authController = require("../auth/authController")

router.post("/login", authController.login)     // Login de usuario

module.exports = router