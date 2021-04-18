import express from "express";
import messages from './messages'

const router = express.Router();

/* GET home page. */
router.use('/messages', messages);

export default router;
