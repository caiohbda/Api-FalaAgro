import { FastifyInstance } from "fastify";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/users", createUser);
  fastify.get("/users", getAllUsers);
  fastify.put("/users/upgrade/:id", updateUser);
  fastify.delete("/users/delete/:id", deleteUser);
};
