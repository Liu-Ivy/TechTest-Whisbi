const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// A sample route
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Start the Express server
app.use(express.static(__dirname + "/public"));
app.use("/", router);
app.listen(3001, () => console.log("Server running on port 3001!"));
