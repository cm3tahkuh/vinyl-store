import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getAllUsersService = async () => {

  return await prisma.user.findMany({
    select: {
      id: true,
      login: true,
      password: true,
      role: {
        select: {
          roleName: true,
        },
      },
      Cart: true,
    },
  });
};

export const createUserService = async (
  login: string,
  password: string,
  roleName: string
) => {
  const role = await prisma.role.findUnique({ where: { roleName: roleName } });

  if (!role) {
    throw new Error(`Роль ${role} не существует.`);
  }

  return await prisma.user.create({
    data: {
      login,
      password,
      roleId: role.id,
    },
  });
};

export const updateUserService = async (
  id: number,
  login: string,
  password: string,
  roleName: string
) => {
  const existUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  const existRole = await prisma.role.findUnique({
    where: {
      roleName: roleName,
    },
  });

  if (!existUser) {
    throw new Error("Пользователь не найден");
  }

  if (!existRole) {
    throw new Error("Роль не найдена");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      login: login,
      password: password,
      roleId: existRole.id,
    },
  });

  return updatedUser;
};

export const deleteUserService = async (id: number) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return deletedUser;
};
