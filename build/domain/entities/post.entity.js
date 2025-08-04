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

// src/domain/entities/post.entity.ts
var post_entity_exports = {};
__export(post_entity_exports, {
  Post: () => Post
});
module.exports = __toCommonJS(post_entity_exports);
var Post = class {
  postId;
  titulo;
  conteudo;
  disciplinaId;
  autorId;
  dtCriacao;
  dtAtualizacao;
  constructor(postId, titulo, conteudo, disciplinaId, autorId, dtCriacao, dtAtualizacao) {
    this.postId = postId;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.disciplinaId = disciplinaId;
    this.autorId = autorId;
    this.dtCriacao = dtCriacao;
    this.dtAtualizacao = dtAtualizacao;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Post
});
