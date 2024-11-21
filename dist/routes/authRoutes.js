"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/routes/authRoutes.ts
var authRoutes_exports = {};
__export(authRoutes_exports, {
  authRoutes: () => authRoutes
});
module.exports = __toCommonJS(authRoutes_exports);

// src/services/authService.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var SECRET_KEY = process.env.SECRET_KEY || "secrettokenkey";
var generateToken = (user) => {
  return import_jsonwebtoken.default.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
};

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
function authRoutes(fastify) {
  return __async(this, null, function* () {
    fastify.post("/login", login);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authRoutes
});
