const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) {
    req.flash("error", "Admin not found");
    return res.redirect("/admin/login");
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    req.flash("error", "Invalid credentials");
    return res.redirect("/admin/login");
  }

  req.session.adminId = admin._id;
  req.flash("success", "Welcome Admin!");
  res.redirect("/admin/dashboard");
};

// ADMIN LOGOUT
exports.logoutAdmin = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};
