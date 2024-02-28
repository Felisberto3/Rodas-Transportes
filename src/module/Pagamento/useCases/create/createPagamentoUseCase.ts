import { CalendarioRepository } from "../../../calendario/repository/repository";
import { geraNumeroDeFactura } from "../../../../config/geraNumeroDeFactura";
import { ServerError } from "../../../../error/index";
import { createPagamentoDto } from "../../repository/interface";
import { PagamentoRepository } from "../../repository/repository";

class CreatePagamentoUseCase {
    constructor(
        private pagamentoRepository: PagamentoRepository,
        private calendarioRepository: CalendarioRepository
        ) { }

    async execute({mes, ...data}: createPagamentoDto) {

        try {
            // const numeroDeFactura = geraNumeroDeFactura()
            // numeroDeFactura
            const currentYear = new Date().getFullYear()

            const pagamenntos = await this.pagamentoRepository.getByYear(currentYear)
            
            if (!pagamenntos.length) {
                const numeroDeFactura = 1 + '.' + geraNumeroDeFactura()

                const novaFactura =  await this.pagamentoRepository.create({ numeroDeFactura,mes, ...data })
                
                for (let i = 0; i < novaFactura.quantidade; i++) {
                    await this.calendarioRepository.create({ data: novaFactura.createdAt, alunoId: data.alunoId })
                }

                return novaFactura
            }
            const ultimoPagamento = pagamenntos[pagamenntos.length - 1]

            const id = ultimoPagamento['numeroDeFactura'].split('.')[0]

            const novoId = Number(id) + 1

            const numeroDeFactura = novoId + '.' + geraNumeroDeFactura()

            const novaFactura =  await this.pagamentoRepository.create({ numeroDeFactura,mes, ...data })

            for (let i = 0; i < novaFactura.quantidade; i++) {
                await this.calendarioRepository.create({ data: novaFactura.createdAt, alunoId: data.alunoId })
            }

            return novaFactura

        } catch (error: any) {
            throw new ServerError(error.message, 400);
        }
    }
}

export { CreatePagamentoUseCase }