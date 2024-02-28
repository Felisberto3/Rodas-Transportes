import { geraNumeroDeFactura } from "../../../../config/geraNumeroDeFactura";
import { ServerError } from "../../../../error/index";
import { createPagamentoDto } from "../../repository/interface";
import { PagamentoRepository } from "../../repository/repository";

class CreatePagamentoUseCase {
    constructor(private PagamentoRepository: PagamentoRepository) { }

    async execute(data: createPagamentoDto){

        try {
            const numeroDeFactura = geraNumeroDeFactura()
            return await this.PagamentoRepository.create({ numeroDeFactura, ...data})
        } catch (error: any) {
            throw new ServerError(error.message, 400);
        }
    }
}

export { CreatePagamentoUseCase }