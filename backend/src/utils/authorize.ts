import { Request, Response } from "express";
import { verifyToken } from "./jwt";

export const authorize = (req: Request, res: Response, nameRole: string) => {
  const token = req.headers["authorization"] as string;

  if (!token) {
    return res.status(401).json({ message: "Токен не предоставлен" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(403).json({ message: "Неверный токен" });
  }

  if (
    !decoded.user ||
    !decoded.user.role ||
    decoded.user.role.roleName !== nameRole
  ) {
    return res
      .status(403)
      .json({ message: `У вас нет прав для выполнения этой операции. Функция доступна только ${nameRole}` });
  }

  return decoded;
};
