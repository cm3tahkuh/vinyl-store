import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserCartService = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: number;
    };
    const userId = decoded.id;

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        CartItem: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      return { items: [] };
    }

    return {
      items: cart.CartItem.map((item: any) => ({
        id: item.id,
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        image: item.product.image,
        quantity: item.product.quantity,
      })),
    };
  } catch (error) {
    throw new Error("Ошибка получения корзины");
  }
};



export const addToCartService = async ({
  token,
  productId,
}: {
  token: string;
  productId: number;
}) => {
  try {
    // 1. Валидация и извлечение userId из токена
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number };
    const userId = decoded.id;

    // 2. Найти или создать корзину
    let cart = await prisma.cart.findUnique({ where: { userId } });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    // 3. Добавить товар в корзину
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        productId,
        cartId: cart.id,
      },
    });

    if (existingItem) {
      throw new Error("Товар уже есть в корзине");
    }

    const cartItem = await prisma.cartItem.create({
      data: {
        productId,
        cartId: cart.id,
      },
    });

    return cartItem;
  } catch (error) {
    throw new Error("Ошибка при добавлении товара в корзину");
  }
};