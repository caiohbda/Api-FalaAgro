import { FastifyReply, FastifyRequest } from "fastify";
import { noticias } from "../data/newsData";
import { Noticia, CreateNoticiaBody } from "../models/news";

export const getAllNoticias = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  if (noticias.length === 0) {
    return reply.status(404).send({ message: "No noticias available" });
  }

  return reply.send({ noticias });
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

  const filteredNoticias = noticias.filter(
    (noticia) => noticia.state.toLowerCase() === state.toLowerCase()
  );

  if (filteredNoticias.length === 0) {
    return reply
      .status(404)
      .send({ message: `Nenhuma notícia encontrada para o estado: ${state}` });
  }

  return reply.send({ noticias: filteredNoticias });
};

export const createNoticia = async (
  request: FastifyRequest<{ Body: CreateNoticiaBody }>,
  reply: FastifyReply
) => {
  const newNoticia: Noticia = request.body as Noticia;
  newNoticia.id = request.server.generateUniqueId();
  noticias.push(newNoticia);
  return reply
    .status(201)
    .send({ message: "Notícia criada com sucesso", noticia: newNoticia });
};
