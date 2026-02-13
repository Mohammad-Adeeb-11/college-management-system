const Notice = require("../models/Notice");

exports.showAddNotice = (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");
  res.render("admin-add-notice");
};

exports.addNotice = async (req, res) => {
  await Notice.create(req.body);
  req.flash("success", "Notice added successfully");
  res.redirect("/admin/notices");
};

exports.listNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });
  res.render("notices", { notices });
};

exports.adminListNotices = async (req, res) => {
  if (!req.session.adminId) {
    return res.redirect("/admin/login");
  }

  const notices = await Notice.find().sort({ createdAt: -1 });
  res.render("admin-notices", { notices });
};

exports.deleteNotice = async (req, res) => {
  if (!req.session.adminId) {
    return res.redirect("/admin/login");
  }

  await Notice.findByIdAndDelete(req.params.id);
  req.flash("success", "Notice deleted");
  res.redirect("/admin/notices");
};

exports.showEditNotice = async (req, res) => {
  if (!req.session.adminId) return res.redirect("/admin/login");

  const notice = await Notice.findById(req.params.id);
  res.render("admin-edit-notice", { notice });
};

exports.updateNotice = async (req, res) => {
  await Notice.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/notices");
};

exports.viewNotice = async (req, res) => {
  try {
    if (!req.session.adminId) {
      return res.redirect("/admin/login");
    }

    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.redirect("/admin/notices");
    }

    res.render("notice-details", { notice }); // 👈 reuse same view
  } catch (error) {
    console.log(error);
    res.redirect("/admin/notices");
  }
};
