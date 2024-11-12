const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Server!");
});
app.get("/about", (req, res) => {
  res.send("This is a simple web server built using Express.js.");
});
app.get("/contact", (req, res) => {
  res.status(201).json({
    email: "student@example.com",
    phone: "123-456-7890",
  });
});
app.get("/random", (req, res) => {
  let randonNum = (Math.random() * 100).toFixed(0);
  // console.log(randonNum);
  res.send(randonNum);
});
app.get("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
