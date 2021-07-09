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

module.exports = innerJoin;
