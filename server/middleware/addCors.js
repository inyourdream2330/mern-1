const addCors = (req, res, next) => {
  console.log("fixed cors");
  res.set("Access-Control-Allow-Origin", "*");
  next();
};
module.exports = addCors;
