import { Router } from "express";
import { adminLogin } from "./admin.controller.js";

const adminRoute = Router();

adminRoute.post("/", adminLogin);

export default adminRoute;
