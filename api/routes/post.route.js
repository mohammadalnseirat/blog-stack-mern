import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create_post } from "../controllers/post.controller.js";
const router = express.Router();

router.post("/create", verifyToken, create_post);

export default router;