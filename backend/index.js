const express = require("express");
const app = express();

const auth = require("./routers/auth");
const persons = require("./routers/persons");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/api/auth", auth);
app.use("/api/persons", persons);

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`Listener is ready on port ${port} ...`);
});
