import { Request, Response } from "express";
import {
  createUserService,
  getAllUsersService,
  updateUserService,
} from "../services/userService";
import { verifyToken } from "../utils/jwt";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers["authorization"] as string;

    if (!token) {
      res.status(401).json({ message: "Токен не предоставлен" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(403).json({ message: "Неверный токен" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении пользователей" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { login, password, roleName } = req.body;
    const token = req.headers["authorization"] as string;

    if (!token) {
      res.status(401).json({ message: "Токен не предоставлен" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(403).json({ message: "Неверный токен" });
    }

    const user = await createUserService(login, password, roleName);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при создании пользователя" });
    console.log(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, login, password, roleName } = req.body;

    const token = req.headers["authorization"] as string;

    if (!token) {
      res.status(401).json({ message: "Токен не предоставлен" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(403).json({ message: "Неверный токен" });
    }

    const user = await updateUserService(id, login, password, roleName);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при обновлении пользователя" });
    console.log(error);
  }
};
