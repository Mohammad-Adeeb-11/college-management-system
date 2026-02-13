require("dotenv").config();

const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");
const flash = require("connect-flash");
const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use((req, res, next) => {
  res.locals.adminId = req.session.adminId || null;
  res.locals.studentId = req.session.studentId || null;
  next();
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// routes
const pageRoutes = require("./routes/pageRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/", pageRoutes);
app.use("/", authRoutes);
app.use("/", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
