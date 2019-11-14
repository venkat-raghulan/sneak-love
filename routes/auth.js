const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const userSchema = require("../models/User");
router.post("/signup", (req, res, next) => {
  const user = req.body;
  userSchema
    .findOne({ email: user.email })
    .then(dbRes => {
      if (dbRes) {
        res.redirect("/signin");
        return;
      }
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(user.password, salt);
      user.password = hashed;
      userSchema
        .create(user)
        .then(() => res.redirect("/signin"))
        .catch(err => console.log(err));
    })
    .catch(dbErr => next(dbErr));
});
router.post("/signin", (req, res, next) => {
  const user = req.body;
  userSchema
    .findOne({ email: user.email })
    .then(dbRes => {
      if (!dbRes) return res.redirect("/signup");
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        req.session.currentUser = dbRes;
        return res.redirect("/prod-manage");
      } else {
        return res.redirect("/signin");
      }
    })
    .catch(err => next(err));
});
module.exports = router;
