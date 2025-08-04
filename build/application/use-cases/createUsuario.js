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

// src/application/use-cases/createUsuario.ts
var createUsuario_exports = {};
__export(createUsuario_exports, {
  CreateUsuario: () => CreateUsuario
});
module.exports = __toCommonJS(createUsuario_exports);
var CreateUsuario = class {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }
  createUsuario(usuario) {
    return this.usuarioRepository.create(usuario);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateUsuario
});
