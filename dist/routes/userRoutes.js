"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/routes/userRoutes.ts
var userRoutes_exports = {};
__export(userRoutes_exports, {
  userRoutes: () => userRoutes
});
module.exports = __toCommonJS(userRoutes_exports);

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
var userRoutes = (fastify) => __async(void 0, null, function* () {
  fastify.post("/users", createUser);
  fastify.get("/users", getAllUsers);
  fastify.put("/users/upgrade/:id", updateUser);
  fastify.delete("/users/delete/:id", deleteUser);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRoutes
});
