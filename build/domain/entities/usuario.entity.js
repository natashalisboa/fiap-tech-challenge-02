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

// src/domain/entities/usuario.entity.ts
var usuario_entity_exports = {};
__export(usuario_entity_exports, {
  Usuario: () => Usuario
});
module.exports = __toCommonJS(usuario_entity_exports);
var Usuario = class {
  userId;
  nome;
  usuario;
  senha;
  cargo;
  dtCriacao;
  dtAtualizacao;
  constructor(userId, nome, usuario, senha, cargo, dtCriacao, dtAtualizacao) {
    this.userId = userId;
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.cargo = cargo;
    this.dtCriacao = dtCriacao;
    this.dtAtualizacao = dtAtualizacao;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Usuario
});
