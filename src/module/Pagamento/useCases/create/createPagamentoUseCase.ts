import { geraNumeroDeFactura } from "../../../../config/geraNumeroDeFactura";
import { ServerError } from "../../../../error/index";
import { createPagamentoDto } from "../../repository/interface";
import { PagamentoRepository } from "../../repository/repository";

class CreatePagamentoUseCase {
    constructor(private PagamentoRepository: PagamentoRepository) { }

    async execute(data: createPagamentoDto){

        try {
            const numeroDeFactura = geraNumeroDeFactura()

            return numeroDeFactura
            // return await this.PagamentoRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a Pagamento", 400);
        }
    }
}

export { CreatePagamentoUseCase }