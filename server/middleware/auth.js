const jwt = require("jsonwebtoken");
const veryfyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });
  }
  try {
    const decoded = jwt.verify(token, "sontungdenvauhkt");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ success: false, message: "Invalid token" });
  }
};
module.exports = veryfyToken;
