import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/profile', verifyToken, profile)


export default router;