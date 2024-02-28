"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoUseCase = void 0;
const geraNumeroDeFactura_1 = require("../../../../config/geraNumeroDeFactura");
const index_1 = require("../../../../error/index");
class CreatePagamentoUseCase {
    constructor(PagamentoRepository) {
        this.PagamentoRepository = PagamentoRepository;
    }
    async execute(data) {
        try {
            const numeroDeFactura = (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
            return await this.PagamentoRepository.create({ numeroDeFactura, ...data });
        }
        catch (error) {
            throw new index_1.ServerError(error.message, 400);
        }
    }
}
exports.CreatePagamentoUseCase = CreatePagamentoUseCase;
