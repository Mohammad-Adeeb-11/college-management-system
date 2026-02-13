const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const adminNoticeController = require("../controllers/adminNoticeController");

// home page
router.get("/", pageController.home);

// about page
router.get("/about", pageController.about);

//course page
router.get("/courses", pageController.courses);

//login page
router.get("/login", pageController.login);

//dashboard
router.get("/dashboard", pageController.dashboard);

//Admin Route
router.get("/admin/login", pageController.adminLogin);

// admin dashboard
router.get("/admin/dashboard", pageController.adminDashboard);

// notices page (for students + public)
router.get("/notices", adminNoticeController.listNotices);

//Notice Detail
router.get("/notices/:id", pageController.noticeDetails);

//view Course detail
router.get("/courses/:id", pageController.courseDetails);

//Register student
router.get("/register", pageController.register);

module.exports = router;
