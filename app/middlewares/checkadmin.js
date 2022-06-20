const userModel = require("../models/User");



module.exports = {
  isAdmin: async (req, res, next) => {
    const userRole = await userModel.findOne({ _id: req.user });
    if (userRole.role !== "admin") {
      res.status(403).send("You dnot have access todo this");
    } else {
      next();
    }
  },
};