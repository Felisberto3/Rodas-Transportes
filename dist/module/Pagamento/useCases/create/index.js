"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPagamento = void 0;
const repository_1 = require("../../repository/repository");
const createPropinaUseCase_1 = require("./createPropinaUseCase");
const createPropinaController_1 = require("./createPropinaController");
const pagamentoRepository = new repository_1.PagamentoRepository();
const createPagamentoUseCase = new createPropinaUseCase_1.CreatePagamentoUseCase(pagamentoRepository);
const createPagamento = new createPropinaController_1.CreatePagamentoController(createPagamentoUseCase);
exports.createPagamento = createPagamento;