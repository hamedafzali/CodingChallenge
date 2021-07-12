const innerJoin = (primary, foreign, primaryKey, foreignKey) => {
  let res = [];
  primary.map((i) =>
    foreign.map((j) => {
      if (i[primaryKey] === j[foreignKey]) {
        res.push({ ...i, ...j });
      }
    })
  );
  return res;
};
const innerJoinGrouped = (primary, foreign, primaryKey, foreignKey) => {
  let res = [];
  let sum = [0, 0, 0];
  primary.map((i) => {
    foreign.map((j) => {
      if (i[primaryKey] === j[foreignKey]) {
        j.confirmedAt ? sum[0]++ : j.rejectedAt ? sum[1]++ : sum[2]++;
      }
    });
    res.push({ ...i, confirmed: sum[0], rejected: sum[1], requested: sum[2] });
    sum = [0, 0, 0];
  });
  return res;
};
module.exports = { innerJoin, innerJoinGrouped };
