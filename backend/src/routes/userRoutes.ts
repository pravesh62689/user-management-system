import express, {RequestHandler} from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers as RequestHandler);
router.post("/", createUser as RequestHandler);
router.put("/:userId", updateUser as RequestHandler);
router.delete("/:userId", deleteUser as RequestHandler);

export default router;
