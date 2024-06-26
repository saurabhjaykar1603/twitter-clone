import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  commentOnPost,
  createPost,
  deletePost,
  likeUnlikePost,
  getAllPosts,
  getUserLikesPost,
  getFollowingPosts,
  getUserPosts
} from "../controllers/post.controller.js";
import { validateDeletePost } from "../middlewares/validateDeletePost.js";
import { deletePostRateLimiter } from "../middlewares/deletePostRateLimiter.js";

const router = Router();

router.post("/create", authMiddleware, createPost);
router.delete(
  "/:id",
  authMiddleware,
  deletePostRateLimiter,
  validateDeletePost,
  deletePost
);
router.post("/comment/:id", authMiddleware, commentOnPost);
router.post("/like/:id", authMiddleware, likeUnlikePost);
router.get("/all", authMiddleware, getAllPosts);
router.get("/following", authMiddleware, getFollowingPosts);
router.get("/user/:username", authMiddleware, getUserPosts);
router.get("/likes/:id", authMiddleware, getUserLikesPost);

export default router;
