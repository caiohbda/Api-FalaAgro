import { FastifyReply, FastifyRequest } from "fastify";
import { users } from "../data/userData";
import { User } from "../models/user";

export const getAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.send(users);
};

export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { fullName, username, email, password, phoneNumber, image }: User =
    request.body as User;

  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    return reply.status(400).send({ message: "Username already exists" });
  }

  const newUser: User = {
    id: new Date().toISOString(),
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive: true,
  };

  users.push(newUser);
  return reply.status(201).send(newUser);
};

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
    isActive,
  }: User = request.body as User;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive,
  };

  return reply.send(users[userIndex]);
};

export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  return reply.status(200).send({ message: "User deleted successfully" });
};
