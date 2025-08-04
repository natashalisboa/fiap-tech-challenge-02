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

// src/infra/repositories/usuario.repository.ts
var usuario_repository_exports = {};
__export(usuario_repository_exports, {
  UsuarioRepository: () => UsuarioRepository
});
module.exports = __toCommonJS(usuario_repository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsuarioRepository
});
