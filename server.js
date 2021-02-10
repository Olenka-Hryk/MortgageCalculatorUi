const express = require('express');
const app = express();

app.use(express.static("./dist/mortgage-calc-ui"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/mortgage-calc-ui/" });
});

app.listen(process.env.PORT || 8080);
