const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes")
const authMiddleware = require("./middlewares/auth")

const app = express()

// Middleware to serve static files
app.use(express.static("public"))

// Middleware for parsing JSON
app.use(bodyParser.json())
app.use(authMiddleware)

// Routes
app.use("/api/users", userRoutes)

// Connect to the database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000")
    })
  })
  .catch((err) => {
    console.error("Database connection error:", err)
  })
