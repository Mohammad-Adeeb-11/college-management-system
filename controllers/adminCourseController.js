const Course = require("../models/Course");

// show add course form
exports.showAddCourse = (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");
  res.render("admin-add-course");
};

// add course
exports.addCourse = async (req, res) => {
  const { name, category, duration, description } = req.body;

  await Course.create({
    name,
    category,
    duration,
    description,
  });

  res.redirect("/admin/courses");
};

// list courses
exports.listCourses = async (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");

  const courses = await Course.find();
  res.render("admin-courses", { courses });
};

// show edit course form
exports.showEditCourse = async (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");

  const course = await Course.findById(req.params.id);
  res.render("admin-edit-course", { course });
};

// update course
exports.updateCourse = async (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");

  const { name, duration, description } = req.body;

  await Course.findByIdAndUpdate(req.params.id, {
    name,
    duration,
    description,
  });

  res.redirect("/admin/courses");
};

// delete course
exports.deleteCourse = async (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");

  await Course.findByIdAndDelete(req.params.id);
  res.redirect("/admin/courses");
};
