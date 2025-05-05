import { Response, Request } from "express";
import {
  addProductService,
  deleteProductService,
  getAllProductsService,
  updateProductService,
} from "../services/productService";
import { authorize } from "../utils/authorize";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка при получении списка товаров" });
  }
};

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const decoded = authorize(req, res, ["manager", "admin"]);
    if (!decoded) {
      return;
    }

    const { name, description, price, quantity, image } = req.body;

    const product = await addProductService({
      name,
      description,
      price,
      quantity,
      image,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка при добавлении нового товара" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const decoded = authorize(req, res, ["manager", "admin"]);
    if (!decoded) {
      return;
    }

    const { id, name, description, price, quantity, image } = req.body;
    const product = await updateProductService({
      id,
      product: { name, description, price, quantity, image },
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Произошла ошибка при обновлении информации товара" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const decoded = authorize(req, res, ["manager", "admin"]);
    if (!decoded) {
      return;
    }

    const { id } = req.body;
    const product = await deleteProductService(id);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Произошла ошибка при удалении товара" });
  }
};
