// authentication middleware
const isLoggedIn = (req, res, next) => {
  req.user
    ? next()
    : res.status(401).json({ msg: "user has not authenticated" });
};

module.exports = isLoggedIn;
