import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export const getAllProductsService = async () => {
  return await prisma.product.findMany();
};

export const addProductService = async (product: Product) => {
  const addUser = prisma.product.create({ data: product });
  return addUser;
};

export const updateProductService = async ({
  id,
  product,
}: {
  id: number;
  product: Product;
}) => {
  const existUser = prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!existUser) {
    throw new Error("Пользователь не найден");
  }

  const updateProduct = await prisma.product.update({
    where: { id: id },
    data: {
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
    },
  });

  return updateProduct;
};

export const deleteProductService = async (id: number) => {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  });
};

export const getProductsBySortingService = async ({
  sortBy,
  minPrice,
  maxPrice,
}: {
  sortBy: string;
  minPrice: number;
  maxPrice: number;
}) => {
  try {
    let orderByClause: { createdAt: "asc" | "desc" };

    if (sortBy === "new") {
      orderByClause = { createdAt: "desc" };
    } else if (sortBy === "old") {
      orderByClause = { createdAt: "asc" };
    } else {
      orderByClause = { createdAt: "asc" };
    }

    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
      orderBy: orderByClause,
    });
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Ошибка загрузки товаров");
  }
};
