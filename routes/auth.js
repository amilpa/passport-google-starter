const express = require("express");
const router = express.Router();
const { passport } = require("../controllers/auth");

const { logoutUser } = require("../controllers/auth");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.CORS_ORIGIN}`,
    failureRedirect: `${process.env.CORS_ORIGIN}`,
  })
);

router.get("/logout", logoutUser);

module.exports = router;
