import { PagamentoRepository } from "../../repository/repository"
import { CreatePagamentoUseCase } from "./createPagamentoUseCase"
import { CreatePagamentoController } from "./createPagamentoController"


const pagamentoRepository = new PagamentoRepository()
const createPagamentoUseCase = new CreatePagamentoUseCase(pagamentoRepository)
const createPagamento = new CreatePagamentoController(createPagamentoUseCase)

export { createPagamento }