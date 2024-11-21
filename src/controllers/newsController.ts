import { FastifyReply, FastifyRequest } from "fastify";
import { noticias } from "../data/newsData";
import { Noticia } from "../models/news";
import { CreateNoticiaBody } from "../models/news";

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
  if (noticias.length === 0) {
    return reply.status(404).send({ message: "Nenhuma notícia disponível." });
  }

  return reply.send({ noticias });
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

export const getNoticiasByState = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { state } = request.query as { state: string };

  if (!state || state.trim() === "") {
    return reply
      .status(400)
      .send({ message: "O parâmetro 'state' é obrigatório." });
  }

  const estadoLowerCase = state.toLowerCase();

  const filteredNoticias = noticias.filter(
    (noticia) => noticia.state.toLowerCase() === estadoLowerCase
  );

  if (filteredNoticias.length === 0) {
    return reply
      .status(404)
      .send({ message: `Nenhuma notícia encontrada para o estado: ${state}` });
  }

  return reply.send({ noticias: filteredNoticias });
};
