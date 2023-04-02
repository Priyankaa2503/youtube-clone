import express from "express";
import { addVideo, addView, deleteVideo, getVideo, random, sub, trend, updateVideo } from "../controllers/video.js"
import { verifyToken } from "../verify.js";
const router= express.Router();

router.post("/",verifyToken,addVideo);
router.put("/:id",verifyToken,updateVideo)
router.delete("/",verifyToken,deleteVideo)
router.get("/find/:id",getVideo)
router.put("/view/:id",addView)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",verifyToken,sub)
router.get("/tags",sub)
router.get("/search",sub)


 
export default router;
 