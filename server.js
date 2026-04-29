const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/login", (req, res) => {
  res.send("Login route working ✅");
});

const user = {
  email: "test@gmail.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});