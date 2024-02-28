"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoUseCase = void 0;
const geraNumeroDeFactura_1 = require("../../../../config/geraNumeroDeFactura");
const index_1 = require("../../../../error/index");
class CreatePagamentoUseCase {
    constructor(pagamentoRepository) {
        this.pagamentoRepository = pagamentoRepository;
    }
    async execute({ mes, ...data }) {
        try {
            // const numeroDeFactura = geraNumeroDeFactura()
            // numeroDeFactura
            const currentYear = new Date().getFullYear();
            const pagamenntos = await this.pagamentoRepository.getByYear(currentYear);
            if (!pagamenntos.length) {
                const numeroDeFactura = 1 + '.' + (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
                return await this.pagamentoRepository.create({ numeroDeFactura, mes, ...data });
            }
            const ultimoPagamento = pagamenntos[pagamenntos.length - 1];
            const id = ultimoPagamento['numeroDeFactura'].split('.')[0];
            const novoId = Number(id) + 1;
            const numeroDeFactura = novoId + '.' + (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
            const novaFactura = await this.pagamentoRepository.create({ numeroDeFactura, mes, ...data });
        }
        catch (error) {
            throw new index_1.ServerError(error.message, 400);
        }
    }
}
exports.CreatePagamentoUseCase = CreatePagamentoUseCase;
