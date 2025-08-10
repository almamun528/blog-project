import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./router/router.js";

const PORT = 3000;
const app = express();
await connectDB();
// middleware

const allowedOrigins = [
  // "http://localhost:3000",
  "https://lively-brioche-761635.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
