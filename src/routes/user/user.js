const fs = require("fs");

// Code Here!!!
const user = require("../../../db/user.json");

// routing for user resgister
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username && !password) {
      return res.status(403).json({
        status: "error",
        message: "Fill the required field!",
      });
    }

    const foundUser = user.find((u) => u.username === username);

    if (foundUser) {
      return res.status(409).json({
        status: "error",
        message: "User has been registered!",
      });
    }

    const newUser = {
      id: user.length + 1,
      username,
      password,
    };
    user.push(newUser);

    // Write the updated user array back to user.json
    fs.writeFileSync(user, JSON.stringify(user, null, 2));

    return res.status(201).json({
      status: "success",
      message: "User registered successfully!",
      data: newUser,
    });
  } catch (error) {
    console.error("Error writing to user.json:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username && !password) {
      return res.status(403).json({
        status: "error",
        message: "Fill the required field!",
      });
    }

    const foundUser = user.find((u) => u.username === username);

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
