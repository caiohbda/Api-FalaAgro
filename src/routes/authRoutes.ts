import { FastifyInstance } from "fastify";
import { login } from "../controllers/authController";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", login);
}
