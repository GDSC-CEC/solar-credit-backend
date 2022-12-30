const _ = require('lodash');
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    if (_.isUndefined(req.headers.authorization)) {
      requestHandler.throwError(
        401,
        "Unauthorized",
        "Not Authorized to access this resource!"
      )();
    }
    const Bearer = req.headers.authorization?.split(" ")[0];

    if (!Bearer || Bearer !== "Bearer") {
      return res.status(401).json({
        message: "Not authorized to access this resource",
      });
    }

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Not authorized to access this resource",
      });
    } else {
      // if (config.auth.jwt_secret) {
      jwt.verify(token, "abcefg", (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Not authorized to access this resource",
          });
        }
        req.user = decoded;
        next();
      });
      // }
    }

    // verifies secret and checks exp
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
}

module.exports = verifyToken;
