import { Router } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import productRoutes from "./productRoutes";
import cartRoutes from "./cartRoutes";

const router = Router();

router.use("/users", userRoutes);

router.use("/auth", authRoutes);

router.use("/products", productRoutes);

router.use("/cart", cartRoutes)

export default router;
