import { FastifyReply, FastifyRequest } from "fastify";
import { noticias } from "../data/newsData";
import { Noticia } from "../models/news";

interface CreateNoticiaBody {
  userId: string;
  title: string;
  content: string;
  state: string;
  city: string;
  image: string;
}

declare module "fastify" {
  interface FastifyInstance {
    noticias: Noticia[];
    generateUniqueId: () => string;
  }
}

export const getNoticias = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.send({ noticias: noticias });
};

export const createNoticia = async (
  request: FastifyRequest<{ Body: CreateNoticiaBody }>,
  reply: FastifyReply
) => {
  const { userId, title, content, state, city, image }: CreateNoticiaBody =
    request.body;

  const newNoticia: Noticia = {
    id: request.server.generateUniqueId(),
    userId,
    title,
    content,
    state,
    city,
    image,
  };

  noticias.push(newNoticia);

  return reply
    .status(201)
    .send({ message: "Notícia criada com sucesso", noticia: newNoticia });
};
