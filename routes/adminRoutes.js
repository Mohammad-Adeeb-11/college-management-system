const express = require("express");
const router = express.Router();
const adminAuthController = require("../controllers/adminAuthController");
const adminCourseController = require("../controllers/adminCourseController");
const adminNoticeController = require("../controllers/adminNoticeController");
const adminStudentController = require("../controllers/adminStudentController");

// login
router.post("/admin/login", adminAuthController.loginAdmin);

// logout
router.get("/admin/logout", adminAuthController.logoutAdmin);

// courses
router.get("/admin/courses", adminCourseController.listCourses);
router.get("/admin/courses/add", adminCourseController.showAddCourse);
router.post("/admin/courses/add", adminCourseController.addCourse);

// edit course
router.get("/admin/courses/edit/:id", adminCourseController.showEditCourse);
router.post("/admin/courses/edit/:id", adminCourseController.updateCourse);

// delete course
router.get("/admin/courses/delete/:id", adminCourseController.deleteCourse);

//Notice
router.get("/admin/notices/add", adminNoticeController.showAddNotice);
router.post("/admin/notices/add", adminNoticeController.addNotice);
router.get("/admin/notices", adminNoticeController.adminListNotices);
router.get("/admin/notices/delete/:id", adminNoticeController.deleteNotice);
router.get("/admin/notices/edit/:id", adminNoticeController.showEditNotice);
router.post("/admin/notices/edit/:id", adminNoticeController.updateNotice);
router.get("/admin/notices/:id", adminNoticeController.viewNotice);

//Student
router.get("/admin/students", adminStudentController.listStudents);

module.exports = router;
