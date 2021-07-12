const express = require("express");
const router = express.Router();
const { innerJoin, innerJoinGrouped } = require("../utils/join");
const { members, absences } = require("../api");
router.get("/members", (req, res) => {
  members().then((value) => {
    res.send(value);
  });
});
router.get("/absences", (req, res) => {
  absences().then((value) => {
    res.send(value);
  });
});

router.get("/members-absences", (req, res) => {
  Promise.all([members(), absences()]).then((values) => {
    //console.log(innerJoin(values[0], values[1]));
    res.send(innerJoin(values[0], values[1], "userId", "userId"));
  });
});
router.get("/members-absences-sum", (req, res) => {
  Promise.all([members(), absences()]).then((values) => {
    //console.log(innerJoin(values[0], values[1]));
    res.send(innerJoinGrouped(values[0], values[1], "userId", "userId"));
  });
});
module.exports = router;
