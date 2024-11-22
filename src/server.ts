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

// Convertendo o valor de process.env.PORT para número ou usando 3333 como fallback
const port = Number(process.env.PORT) || 3333;

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
