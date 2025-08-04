"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/interface/controllers/routes.ts
var routes_exports = {};
__export(routes_exports, {
  usuarioRoutes: () => usuarioRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/interface/controllers/usuarioController.ts
var import_zod = require("zod");

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
  const registerBodySchema = import_zod.z.object({
    nome: import_zod.z.string(),
    usuario: import_zod.z.string(),
    senha: import_zod.z.string(),
    cargo: import_zod.z.number().int()
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
async function usuarioRoutes(app) {
  app.post("/usuario", create);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usuarioRoutes
});
