"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/data/userData.ts
var users = [
  {
    id: "1b234d67-89ab-4cde-0123-456789abcdef",
    fullName: "Admin User",
    username: "Admin",
    email: "admin@email.com",
    image: "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "admin123",
    phoneNumber: "+1234567890",
    isActive: true
  },
  {
    id: "a1b2c3d4-e5f6-7890-1234-56789abcdef1",
    fullName: "Mario",
    username: "mario",
    email: "mario@email.com",
    image: "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "mario1234",
    phoneNumber: "+1234567890",
    isActive: true
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-6789abcdef2",
    fullName: "Bob Smith",
    username: "bobsmith",
    email: "bob.smith@example.com",
    image: "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "bobsecure",
    phoneNumber: "+1234567897",
    isActive: true
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-789abcdef34",
    fullName: "Charlie Davis",
    username: "charlied",
    email: "charlie.davis@example.com",
    image: "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "charlie12345",
    phoneNumber: "+1234567898",
    isActive: false
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-89abcdef567",
    fullName: "Diana Evans",
    username: "dianae",
    email: "diana.evans@example.com",
    image: "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "diana!secure",
    phoneNumber: "+1234567899",
    isActive: true
  }
];

// src/controllers/userController.ts
var getAllUsers = (request, reply) => __async(void 0, null, function* () {
  return reply.send(users);
});
var createUser = (request, reply) => __async(void 0, null, function* () {
  const { fullName, username, email, password, phoneNumber, image } = request.body;
  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    return reply.status(400).send({ message: "Username already exists" });
  }
  const newUser = {
    id: (/* @__PURE__ */ new Date()).toISOString(),
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive: true
  };
  users.push(newUser);
  return reply.status(201).send(newUser);
});
var updateUser = (request, reply) => __async(void 0, null, function* () {
  const { id } = request.params;
  const {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive = true
  } = request.body;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }
  users[userIndex] = __spreadProps(__spreadValues({}, users[userIndex]), {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    image,
    isActive
  });
  return reply.send(users[userIndex]);
});
var deleteUser = (request, reply) => __async(void 0, null, function* () {
  const { id } = request.params;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return reply.status(404).send({ message: "User not found" });
  }
  users.splice(userIndex, 1);
  return reply.status(200).send({ message: "User deleted successfully" });
});

// src/routes/userRoutes.ts
var userRoutes = (fastify2) => __async(void 0, null, function* () {
  fastify2.post("/users", createUser);
  fastify2.get("/users", getAllUsers);
  fastify2.put("/users/upgrade/:id", updateUser);
  fastify2.delete("/users/delete/:id", deleteUser);
});

// src/data/newsData.ts
var noticias = [
  {
    id: "5b567ih8-9ef0-1243-g123-5678901234ef",
    userId: "5f678b12-23ef-8012-4567-89abcdef1234",
    title: "De olho no meio-ambiente",
    content: "Brasil importa fertilizante para impulsionar descarboniza\xE7\xE3o do agroneg\xF3cio",
    state: "MG",
    city: "Enstone",
    image: "https://images.unsplash.com/photo-1645459264002-c80d2b5d2d23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "8c234fe5-6bc7-8910-def0-2345678901bc",
    userId: "2c345e78-90bc-5def-1234-56789abcdef0",
    title: "Exporta\xE7\xF5es em alta",
    content: "Embarques de caf\xE9 sobem mais de 40% e superam US$ 1 bilh\xE3o",
    state: "SP",
    city: "New York",
    image: "https://images.unsplash.com/photo-1694500788249-71b09a87db40?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "7b345gf6-7cd8-9021-ef01-3456789012cd",
    userId: "3d456f89-01cd-6ef0-2345-6789abcdef12",
    title: "Desafios do setor",
    content: "Agricultura busca transforma\xE7\xE3o para enfrentar mudan\xE7as clim\xE1ticas",
    state: "SP",
    city: "Austin",
    image: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "6a456hg7-8de9-0132-f012-4567890123de",
    userId: "4e567a01-12de-7f01-3456-789abcdef123",
    title: "Bahia consolida posi\xE7\xE3o como a pr\xF3xima fronteira do agroneg\xF3cio no Brasil",
    content: "Colabora\xE7\xF5es visam a qualifica\xE7\xE3o e profissionaliza\xE7\xE3o de produtores locais, uma \xE1rea que ainda demanda aten\xE7\xE3o no estado.",
    state: "RJ",
    city: "Maranello",
    image: "https://images.unsplash.com/photo-1633375011368-b3d9b70ceef8?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "4c678ji9-0fg1-2354-h234-6789012345f0",
    userId: "6a789c23-34f0-9134-5678-9abcdef12345",
    title: "Pesquisa aponta contamina\xE7\xE3o de popula\xE7\xE3o por agrot\xF3xicos em MT",
    content: "Estudo feito entre 2015 e 2019 aponta pelo menos 13 morbidades associadas \xE0 exposi\xE7\xE3o da popula\xE7\xE3o a agrot\xF3xicos",
    state: "RS",
    city: "Woking",
    image: "https://images.unsplash.com/photo-1698610642784-2e5432c1ecc9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Cadeia do mel em Pernambuco ganha for\xE7a com unidade de extra\xE7\xE3o em Dormentes",
    content: "A Companhia do Desenvolvimento dos Vales do S\xE3o Francisco e do Parna\xEDba (Codevasf) quer destravar gargalos que reduzem o potencial da apicultura em Pernambuco. ",
    state: "PE",
    city: "San Francisco",
    image: "https://images.unsplash.com/photo-1647427062468-74ff21e8934f?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "E-Agro Salvador 2024 conecta o agroneg\xF3cio baiano \xE0 cidade",
    content: "O evento, que segue at\xE9 s\xE1bado (9), re\xFAne uma diversidade de produtos e solu\xE7\xF5es para o agroneg\xF3cio",
    state: "BA",
    city: "San Francisco",
    image: "https://assets.revistacultivar.com.br/88987afa-0acd-4976-9d53-63f23aaf3b2f.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Evento debate custos de produ\xE7\xE3o de gr\xE3os e competitividade do agro",
    content: "Pain\xE9is da manh\xE3 do \u201CBenchmark Agro\u201D reuniram especialistas e pesquisadores",
    state: "DF",
    city: "San Francisco",
    image: "https://cnabrasil.org.br/storage/arquivos/WhatsApp-Image-2024-11-05-at-10.11.29.jpeg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "1\xB0 Evento Agrocapitais 2024",
    content: "A Confedera\xE7\xE3o da Agricultura e Pecu\xE1ria do Brasil (CNA) e o Instituto Brasileiro de Direito do Agroneg\xF3cio (IBDA) promovem, no dia 05 de setembro, no audit\xF3rio da CNA, em Bras\xEDlia, o workshop \u201CO Agro e o Mercado de Capitais",
    state: "DF",
    city: "San Francisco",
    image: "https://cnabrasil.org.br/storage/arquivos/icones/39384869954_70727d1098_k.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Maranh\xE3o Recebe Abertura Nacional do Plantio da Soja 2024/2025",
    content: "Evento acontecer\xE1 em A\xE7ail\xE2ndia no dia 11 de outubro, com participa\xE7\xE3o de produtores rurais e transmiss\xE3o ao vivo pelo Canal Rural",
    state: "MA",
    city: "San Francisco",
    image: "https://www.cnabrasil.org.br/storage/arquivos/50927535446_5a081c8944_o.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Agro \xE9 parte da solu\xE7\xE3o para os desafios clim\xE1ticos, diz presidente da CNA",
    content: "Confedera\xE7\xE3o entregou posicionamento do setor no evento \u201CPr\xE9-COP 29 \u2013 De Baku a Bel\xE9m\u201D, na sede da entidade",
    state: "DF",
    city: "San Francisco",
    image: "https://www.cnabrasil.org.br/storage/arquivos/WhatsApp-Image-2024-10-09-at-10.29.31.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Calend\xE1rio de feiras agropecu\xE1rias 2024",
    content: "Expodireto Cotrijal, em N\xE3o-me-toque (RS), \xE9 um dos principais destaques do m\xEAs",
    state: "RS",
    city: "San Francisco",
    image: "https://s2-globorural.glbimg.com/Mlp3NUWTU6F36Muu9mL2_yy2lz4=/0x0:4903x2755/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2024/R/u/AqXhAISY24YZlTTDdJZw/extranet-gallery-17364.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Fazenda com 4 quatros para aluguel",
    content: "10000m\xB2, 4 quartos, 6 banheiros, 50 vagas",
    state: "RS",
    city: "San Francisco",
    image: "https://fazendacapoava.com.br/wp-content/webp-express/webp-images/uploads/2023/05/SITE-HOME-3-1.jpg.webp"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Ch\xE1cara com 2 quartos \xE0 venda",
    content: "100m\xB2, 2 quartos, 2 banheiros, 20 vagas",
    state: "PE",
    city: "San Francisco",
    image: "https://festivalvaledocafe.com.br/wp-content/themes/inspiro/assets/images/fazendas/fazenda-santarosa.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "S\xEDtio com 5 quartos para aluguel",
    content: "300m\xB2, 5 quartos, 6 banheiros, 10 vagas",
    state: "PE",
    city: "San Francisco",
    image: "https://www.constancezahn.com/wp-content/uploads/2019/06/01-carrosseis-guia-fazenda-fortaleza-2023.jpg"
  },
  {
    id: "9d123ef4-5ab6-7890-cdef-1234567890ab",
    userId: "1b234d67-89ab-4cde-0123-456789abcdef",
    title: "Fazenda com 6 quartos para aluguel",
    content: "600m\xB2, 6 quartos, 4 banheiros, 10 vagas",
    state: "PE",
    city: "San Francisco",
    image: "https://www.casadevalentina.com.br/wp-content/uploads/2022/11/Sede-de-um-fazenda-em-Ribeira%CC%83o-dos-I%CC%81ndios-com-1300m2-de-a%CC%81rea-construi%CC%81da-projetada-pelo-arquiteto-GUSTAVO-MARASCA-_-foto-18.jpg.optimal.jpg"
  }
];

// src/services/newsService.ts
var getAllNoticias = (request, reply) => __async(void 0, null, function* () {
  if (noticias.length === 0) {
    return reply.status(404).send({ message: "No noticias available" });
  }
  return reply.send({ noticias });
});
var getNoticiasByState = (request, reply) => __async(void 0, null, function* () {
  const { state } = request.query;
  if (!state || state.trim() === "") {
    return reply.status(400).send({ message: "O par\xE2metro 'state' \xE9 obrigat\xF3rio." });
  }
  const filteredNoticias = noticias.filter(
    (noticia) => noticia.state.toLowerCase() === state.toLowerCase()
  );
  if (filteredNoticias.length === 0) {
    return reply.status(404).send({ message: `Nenhuma not\xEDcia encontrada para o estado: ${state}` });
  }
  return reply.send({ noticias: filteredNoticias });
});
var createNoticia = (request, reply) => __async(void 0, null, function* () {
  const newNoticia = request.body;
  newNoticia.id = request.server.generateUniqueId();
  noticias.push(newNoticia);
  return reply.status(201).send({ message: "Not\xEDcia criada com sucesso", noticia: newNoticia });
});

// src/routes/newsRoutes.ts
var noticiasRoutes = (fastify2) => __async(void 0, null, function* () {
  fastify2.get("/noticias", getAllNoticias);
  fastify2.get("/noticias/state", getNoticiasByState);
  fastify2.post("/noticias", createNoticia);
});

// src/services/authService.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var SECRET_KEY = process.env.SECRET_KEY || "secrettokenkey";
var generateToken = (user) => {
  return import_jsonwebtoken.default.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
};

// src/controllers/authController.ts
var login = (request, reply) => __async(void 0, null, function* () {
  const { identifier, password } = request.body;
  if (!users || users.length === 0) {
    return reply.status(500).send({ message: "User list is empty or not found" });
  }
  const user = users.find(
    (user2) => user2.username === identifier || user2.email === identifier
  );
  if (!user) {
    return reply.status(401).send({ message: "Invalid username or password" });
  }
  if (user.password !== password) {
    return reply.status(401).send({ message: "Invalid username or password" });
  }
  const token = generateToken(user);
  return reply.send({ message: "Login successful", token });
});

// src/routes/authRoutes.ts
function authRoutes(fastify2) {
  return __async(this, null, function* () {
    fastify2.post("/login", login);
  });
}

// src/server.ts
var server = (0, import_fastify.default)({ logger: true });
server.decorate("generateUniqueId", () => {
  return Date.now().toString();
});
server.register(import_cors.default, {
  origin: "*"
});
server.register(userRoutes);
server.register(noticiasRoutes);
server.register(authRoutes);
server.listen({ port: 3333 }, () => {
  console.log("Server is running on port 3333");
});
