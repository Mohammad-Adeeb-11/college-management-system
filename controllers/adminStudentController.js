const Student = require("../models/Student");

exports.listStudents = async (req, res) => {
  try {
    if (!req.session.adminId) {
      return res.redirect("/admin/login");
    }

    const students = await Student.find().sort({ createdAt: -1 });

    res.render("admin-students", { students });
  } catch (error) {
    console.log(error);
    res.redirect("/admin/dashboard");
  }
};
