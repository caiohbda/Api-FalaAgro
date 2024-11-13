import jwt from "jsonwebtoken";
import { User } from "../models/user";

const SECRET_KEY = process.env.SECRET_KEY || "secrettokenkey";

export const generateToken = (user: User): string => {
  return jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
