import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", getAllProducts);

router.post("/createProduct", addProduct);

router.put("/updateProductById", updateProduct);

router.delete("/deleteProductById", deleteProduct);

export default router;
