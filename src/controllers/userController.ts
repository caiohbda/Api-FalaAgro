import { FastifyReply, FastifyRequest } from "fastify";
import { users } from "../data/userData";
import { User } from "../models/user";

// Retorna todos os usuários
export const getAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.send(users);
};

// Cria um novo usuário
export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { fullName, username, email, password, phoneNumber, image }: User =
    request.body as User;

  console.log("Dados recebidos:", request.body); // Verifique os dados recebidos

  // Verifica se o nome de usuário já existe
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    return reply.status(400).send({ message: "Username already exists" });
  }

  // Criação de um novo usuário
  const newUser: User = {
    id: new Date().toISOString(), // Gerando um ID único baseado na data
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image, // image pode ser undefined aqui
    isActive: true, // Define isActive como 'true' por padrão
  };

  // Adiciona o novo usuário à lista de usuários
  users.push(newUser);

  // Retorna o novo usuário com status 201 (Created)
  return reply.status(201).send(newUser);
};

// Atualiza os dados de um usuário
export const updateUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive = true, // Define isActive como 'true' por padrão caso não seja enviado
  }: User = request.body as User;

  // Encontra o índice do usuário no array
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }

  // Atualiza o usuário com os novos dados
  users[userIndex] = {
    ...users[userIndex],
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image, // image agora pode ser undefined
    isActive, // Atualiza o campo isActive, caso seja fornecido
  };

  // Retorna o usuário atualizado
  return reply.send(users[userIndex]);
};

// Deleta um usuário
export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  // Encontra o índice do usuário no array
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }

  // Remove o usuário do array
  users.splice(userIndex, 1);

  // Retorna uma mensagem de sucesso
  return reply.status(200).send({ message: "User deleted successfully" });
};
