const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT, { algorithms: ["HS256"] });
    const userId = decodedToken.Id_user;
    const userEmail = decodedToken.email;

    let user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ message: "Not authorized: User not found" });
    }

    user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(401).json({ message: "Not authorized: User not found" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" + error });
  }
};
