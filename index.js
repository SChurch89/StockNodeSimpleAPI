const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const PORT = process.env.PORT || 5000; // Use PORT in uppercase

// Handlebars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Homepage Route
app.get("/", (req, res) => {
  res.render("home");
});

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the React app

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
