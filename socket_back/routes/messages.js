import express from "express";
import Messages from "../controllers/Messages";

const router = express.Router();

/* GET users listing. */
router.post('/', Messages.send);

export default router;
