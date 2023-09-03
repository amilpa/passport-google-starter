const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// const Users = require("../models/user");
const statusCodes = require("http-status-codes");

// passport config

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.***REMOVED***,
      clientSecret: process.env.***REMOVED***,
      callbackURL: `${process.env.API_URL}/auth/google/callback`,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
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
