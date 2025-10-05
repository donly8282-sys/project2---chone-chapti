const mongoose = require("mongoose")

// Function to connect to the database
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Recommended for better connection management
    })

    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error.message)
    process.exit(1) // Exit the process with failure
  }
}

// Export the connectDB function
module.exports = connectDB
