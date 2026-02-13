const Course = require("../models/Course");
const Student = require("../models/Student");
const Notice = require("../models/Notice");

//Home Controller
exports.home = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 }).limit(3);

  res.render("home", { notices });
};

//About Controller
exports.about = (req, res) => {
  res.render("about");
};

//Course controller
exports.courses = async (req, res) => {
  const courses = await Course.find();
  res.render("courses", { courses });
};

//Login Controller
exports.login = (req, res) => {
  res.render("login");
};

//Dashboard
exports.dashboard = async (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  }

  const student = await Student.findById(req.session.studentId);
  res.render("dashboard", { student });
};

//Admin Login
exports.adminLogin = (req, res) => {
  res.render("admin-login");
};

exports.adminDashboard = async (req, res) => {
  try {
    // Protect route
    if (!req.session.adminId) {
      return res.redirect("/admin/login");
    }

    const coursesCount = await Course.countDocuments();
    const noticesCount = await Notice.countDocuments();

    // If Student model exists
    let studentsCount = 0;
    try {
      studentsCount = await Student.countDocuments();
    } catch (err) {
      studentsCount = 0;
    }

    res.render("admin-dashboard", {
      coursesCount,
      studentsCount,
      noticesCount,
    });
  } catch (error) {
    console.log("Dashboard Error:", error);
    res.redirect("/");
  }
};

//View Course Detail
exports.courseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.redirect("/courses");
    }

    res.render("course-details", { course });
  } catch (error) {
    res.redirect("/courses");
  }
};

// REgister Controlletr
exports.register = (req, res) => {
  res.render("register");
};

//Notice Detail
exports.noticeDetails = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.redirect("/notices");
    }

    res.render("notice-details", { notice });
  } catch (error) {
    console.log(error);
    res.redirect("/notices");
  }
};
