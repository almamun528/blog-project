import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.jwt_secret_key);
    next();
    console.log(token)
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};
export default auth;
