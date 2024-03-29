"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropina = void 0;
const repository_1 = require("../../repository/repository");
const createPropinaUseCase_1 = require("./createPropinaUseCase");
const createPropinaController_1 = require("./createPropinaController");
const propinaRepository = new repository_1.PropinaRepository();
const createPropinaUseCase = new createPropinaUseCase_1.CreatePropinaUseCase(propinaRepository);
const createPropina = new createPropinaController_1.CreatePropinaController(createPropinaUseCase);
exports.createPropina = createPropina;
