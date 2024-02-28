import { PagamentoRepository } from "module/Pagamento/repository/repository"
import { PutPagamentoUseCase } from "./putPagamentoUseCase"
import { PutPagamentoController } from "./putPagamentoController"


const pagamentoRepository = new PagamentoRepository()
const putPagamentoUseCase = new PutPagamentoUseCase(pagamentoRepository)
const PutPagamento = new PutPagamentoController(putPagamentoUseCase)

export { PutPagamento }