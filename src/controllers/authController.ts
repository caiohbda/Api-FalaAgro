import { FastifyReply, FastifyRequest } from "fastify";
import { generateToken, verifyToken } from "../services/authService";
import { findUserByUsernameAndPassword } from "../services/userService";
import { User } from "../models/user";
import { users } from "../data/userData";

interface LoginRequestBody {
  identifier: string;
  password: string;
}

export const login = async (
  request: FastifyRequest<{ Body: LoginRequestBody }>,
  reply: FastifyReply
) => {
  const { identifier, password } = request.body;

  // Verifica se 'users' existe no 'userData'
  if (!users || users.length === 0) {
    return reply
      .status(500)
      .send({ message: "User list is empty or not found" });
  }

  // Busca o usuário pelo username ou email
  const user: User | undefined = users.find(
    (user) => user.username === identifier || user.email === identifier
  );

  if (!user) {
    return reply.status(401).send({ message: "Invalid username or password" });
  }

  // Verifica se a senha está correta
  if (user.password !== password) {
    return reply.status(401).send({ message: "Invalid username or password" });
  }

  // Gera o token de autenticação
  const token = generateToken(user);

  return reply.send({ message: "Login successful", token });
};

export const me = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return reply.status(401).send({ message: "Token not provided" });
  }

  try {
    const decoded: any = verifyToken(token);
    const user = users.find((u) => u.id === decoded.userId); // Verificar no `userData`

    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }

    return reply.send({ user });
  } catch (error) {
    return reply.status(401).send({ message: "Invalid token" });
  }
};
