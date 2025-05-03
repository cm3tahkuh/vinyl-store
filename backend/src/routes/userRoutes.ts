import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);

router.post("/create", createUser);

router.put("/updateUserById", updateUser);

router.delete("/updateUserById", updateUser);

export default router;
