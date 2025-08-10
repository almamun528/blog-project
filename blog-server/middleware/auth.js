import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization header missing" });
    }

    // authHeader format: "Bearer <token>"
    const token = authHeader.split(" ")[1]; // Extract the token part

    if (!token) {
      return res.status(401).json({ success: false, message: "Token missing" });
    }

    // Verify token using your secret key
    const decoded = jwt.verify(token, process.env.jwt_secret_key);

    // Optionally attach decoded info to req.user or req.decoded
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default auth;
