const express = require("express")
const router = express.Router()
const showdown = require("showdown");

const converter = new showdown.Converter();

const usersRoute = require("./usersRoutes")
const authRoute = require("./authRoutes")

router.use("/users",    usersRoute)
router.use("/auth",     authRoute)

module.exports = router