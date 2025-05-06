import { Request, Response } from "express";
import { addToCartService, getUserCartService } from "../services/cartService";

export const getUserCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  const token = req.headers.authorization as string;

  if (!token) {
    res.status(401).json({ message: "Необходима авторизация" });
  }

  try {
    const cart = await getUserCartService(token);
    res.json(cart);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message || "Ошибка при получении корзины" });
  }
};

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  const token = req.headers.authorization as string;

  if (!token) {
    res.status(401).json({ message: "Необходима авторизация" });
  }

  const { productId } = req.body;

  if (!productId) {
    res.status(400).json({ message: "productId обязателен" });
  }

  try {
    const cartItem = await addToCartService({
      token,
      productId: Number(productId),
    });

    res.json(cartItem);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message || "Ошибка добавления товара" });
  }
};
