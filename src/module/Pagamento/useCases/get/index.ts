import { PagamentoRepository } from "../../repository/repository"
import { GetPagamentoController } from "./getPropinaController"
import { GetPagamentoUseCase } from "./getPropinaUseCase"


const pagamentoRepository = new PagamentoRepository()
const getPagamentoUseCase = new GetPagamentoUseCase(pagamentoRepository)
const getPagamento = new GetPagamentoController(getPagamentoUseCase)

export { getPagamento }