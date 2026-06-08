import express from "express";
import { registerUser, loginUser, getUser, googleLogin } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);
router.get("/me", authMiddleware, getUser);

export default router;