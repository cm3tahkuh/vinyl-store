import { Router } from "express";
import { addToCart, getUserCart } from "../controllers/cartController";

const router = Router();

router.get("/", getUserCart);

router.post("/addToCartByUserId", addToCart);

export default router;
