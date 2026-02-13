const Student = require("../models/Student");
const bcrypt = require("bcrypt");

// STUDENT REGISTER
exports.registerStudent = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check password match
    if (password !== confirmPassword) {
      req.flash("error", "Passwords do not match");
      return res.redirect("/register");
    }

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      req.flash("error", "Email already registered");
      return res.redirect("/register");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    await Student.create({
      name,
      email,
      password: hashedPassword,
    });

    req.flash("success", "Registration successful! Please login.");
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    req.flash("error", "Something went wrong");
    res.redirect("/register");
  }
};

// LOGIN
exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) {
    return res.send("Student not found");
  }

  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) {
    return res.send("Invalid credentials");
  }

  req.session.studentId = student._id;
  res.redirect("/dashboard");
};

//LogOut
exports.logoutStudent = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
