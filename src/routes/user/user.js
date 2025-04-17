const { User } = require("../../../models"); // Import the User model

// Routing for user registration
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(403).json({
        status: "error",
        message: "Fill the required field!",
      });
    }

    // Check if the user already exists in the database
    const foundUser = await User.findOne({ where: { username } });

    if (foundUser) {
      return res.status(409).json({
        status: "error",
        message: "User has been registered!",
      });
    }

    // Create a new user in the database
    const newUser = await User.create({ username, password });

    return res.status(201).json({
      status: "success",
      message: "User registered successfully!",
      data: { id: newUser.id, username: newUser.username },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// Routing for user login
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(403).json({
        status: "error",
        message: "Fill the required field!",
      });
    }

    // Find the user in the database
    const foundUser = await User.findOne({ where: { username } });

    if (!foundUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found!",
      });
    }

    if (foundUser.password !== password) {
      return res.status(401).json({
        status: "error",
        message: "Invalid password!",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Login successful!",
      data: { id: foundUser.id, username: foundUser.username },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
