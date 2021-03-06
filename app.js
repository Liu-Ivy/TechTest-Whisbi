const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.static(__dirname + "/public"));
app.use("/", router);
app.listen(PORT, () => console.log("Server running on port 3000!"));
