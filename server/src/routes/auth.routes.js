import { Router } from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signupUser);

router.get("/login", loginUser);

router.get("/logout", logoutUser);
export default router;
