// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next() // User is authenticated, proceed to the next middleware or route handler
  }
  return res.status.json({ message: "Access denied" }) // User is not authenticated
}

module.exports = {
  isAuthenticated,
}
