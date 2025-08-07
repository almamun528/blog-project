import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./router/router.js";


const PORT = 3001;
const app = express();
await connectDB();
// middleware
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
// I have to make Module pattern code
// 3h 53m 52s
