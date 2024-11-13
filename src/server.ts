import fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "../src/routes/userRoutes";
import { noticiasRoutes } from "./routes/newsRoutes";
import { authRoutes } from "../src/routes/authRoutes";

const server = fastify({ logger: true });

server.decorate("generateUniqueId", () => {
  return Date.now().toString();
});

server.register(cors, {
  origin: "*",
});

server.register(userRoutes);
server.register(noticiasRoutes);
server.register(authRoutes);

server.listen({ port: 3333 }, () => {
  console.log("Server is running on port 3333");
});
