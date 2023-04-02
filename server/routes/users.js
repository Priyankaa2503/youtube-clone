import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verify.js";


const router = express.Router();

//update user
router.put("/:id", verifyToken, update);

//delete user
// router.delete("/:id", verify, deleteUser);

// //get a user
// router.get("/find/:id", getUser);

// //subscribe a user
// router.put("/sub/:id", verify, subscribe);

// //unsubscribe a user
// router.put("/unsub/:id", verify, unsubscribe);

// //like a video
// router.put("/like/:videoId", verify, like);

// //dislike a video
// router.put("/dislike/:videoId", verify, dislike);

export default router;