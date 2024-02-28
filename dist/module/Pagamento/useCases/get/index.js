"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagamento = void 0;
const repository_1 = require("../../repository/repository");
const getPropinaController_1 = require("./getPropinaController");
const getPropinaUseCase_1 = require("./getPropinaUseCase");
const pagamentoRepository = new repository_1.PagamentoRepository();
const getPagamentoUseCase = new getPropinaUseCase_1.GetPagamentoUseCase(pagamentoRepository);
const getPagamento = new getPropinaController_1.GetPagamentoController(getPagamentoUseCase);
exports.getPagamento = getPagamento;