const express = require("express");
const app = express();

const auth = require("./routers/auth");
const persons = require("./routers/persons");

app.use("/api/auth", auth);
app.use("/api/persons", persons);

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`Listener is ready on port ${port} ...`);
});
