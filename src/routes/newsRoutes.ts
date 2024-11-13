import { FastifyInstance } from "fastify";
import {
  getAllNoticias,
  getNoticiasByState,
  createNoticia,
} from "../services/newsService";

export const noticiasRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/noticias", getAllNoticias);
  fastify.get("/noticias/state", getNoticiasByState);
  fastify.post("/noticias", createNoticia);
};
