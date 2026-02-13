const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//register
router.post("/register", authController.registerStudent);

//login
router.post("/login", authController.loginStudent);

//logout
router.get("/logout", authController.logoutStudent);

module.exports = router;
