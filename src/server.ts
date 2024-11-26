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

// Registro das rotas
server.register(userRoutes);
server.register(noticiasRoutes);
server.register(authRoutes);

const port = Number(process.env.PORT) || 3333;

server.listen({ port, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server is running on ${address}`);
});
