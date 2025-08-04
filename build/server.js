"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3e3)
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid environment variables", import_zod.z.treeifyError(_env.error));
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/app.ts
var import_fastify = __toESM(require("fastify"));

// src/interface/controllers/usuarioController.ts
var import_zod2 = require("zod");

// src/infra/repositories/usuario.repository.ts
var UsuarioRepository = class {
  async findById(userId) {
    return {
      userId,
      nome: "Nome Exemplo",
      usuario: "usuario_exemplo",
      senha: "senha_exemplo",
      cargo: 1,
      dtCriacao: /* @__PURE__ */ new Date(),
      dtAtualizacao: /* @__PURE__ */ new Date()
    };
  }
  async create(usuario) {
    return usuario;
  }
};

// src/application/use-cases/createUsuario.ts
var CreateUsuario = class {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }
  createUsuario(usuario) {
    return this.usuarioRepository.create(usuario);
  }
};

// src/interface/controllers/usuarioController.ts
async function create(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    nome: import_zod2.z.string(),
    usuario: import_zod2.z.string(),
    senha: import_zod2.z.string(),
    cargo: import_zod2.z.number().int()
  });
  const { nome, usuario, senha, cargo } = registerBodySchema.parse(request.body);
  try {
    const usuarioRepository = new UsuarioRepository();
    const createUsuario = new CreateUsuario(usuarioRepository);
    await createUsuario.createUsuario({
      userId: 0,
      //auto-generated
      nome,
      usuario,
      senha,
      cargo,
      dtCriacao: /* @__PURE__ */ new Date(),
      dtAtualizacao: /* @__PURE__ */ new Date()
    });
    return reply.status(201).send({ message: "Usu\xE1rio criado com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar usu\xE1rio:", error);
    throw new Error("Erro ao criar usu\xE1rio");
  }
}

// src/interface/controllers/routes.ts
async function usuarioRoutes(app2) {
  app2.post("/usuario", create);
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(usuarioRoutes);

// src/server.ts
app.listen({
  host: "0.0.0.0",
  port: env.PORT
}).then(() => {
  console.log("Server is running on http://localhost:3000");
});
