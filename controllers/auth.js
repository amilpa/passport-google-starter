const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// const Users = require("../models/user");
const statusCodes = require("http-status-codes");

// passport config

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/auth/google/callback`,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // callback for adding to db
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const getUser = (req, res) => {
  if (req.user) {
    const user = {
      id: req.user.id,
      name: req.user.displayName,
      email: req.user.email,
      imgURL: req.user.picture,
    };
    res.json({ user });
  } else {
    res.status(401).json({ user: null });
  }
};

const logoutUser = (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.redirect(`${process.env.CORS_ORIGIN}`);
  });
};

module.exports = { passport, getUser, logoutUser };
