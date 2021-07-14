const assert = require("assert");
const { members, absences } = require("../api");
const { innerJoin, innerJoinGrouped } = require("../utils/join");
const everyItemContainsKey = (key) => (collection) =>
  collection.forEach((item) => assert(Object.keys(item).includes(key)));

describe("inner join", () => {
  test("must call members and absences", () => {
    Promise.all([members(), absences()]).then((values) => {
      result = innerJoin(values[0], values[1], "userId", "userId");
      it(result.length).toBeGreaterThan(0);
    });
  });
  test("must join members and absences", () => {
    Promise.all([members(), absences()]).then((values) => {
      it(values.length).toBeEqual(2);
    });
  });
  test("must has listed keys", () => {
    Promise.all([members(), absences()]).then((values) => {
      [
        "id",
        "name",
        "userId",
        "image",
        "createdAt",
        "startDate",
        "endDate",
      ].forEach((key) => {
        it(key, () => innerJoin(result).then(everyItemContainsKey(key)));
      });
    });
  });
});

describe("inner join grouped", () => {
  test("must has listed keys", () => {
    Promise.all([members(), absences()]).then((values) => {
      [
        "id",
        "name",
        "userId",
        "image",
        "confirmed",
        "rejected",
        "requested",
      ].forEach((key) => {
        it(key, () => innerJoinGrouped(result).then(everyItemContainsKey(key)));
      });
    });
  });
});
