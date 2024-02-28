import { PagamentoRepository } from "../../repository/repository"
import { CreatePagamentoUseCase } from "./createPropinaUseCase"
import { CreatePagamentoController } from "./createPropinaController"


const pagamentoRepository = new PagamentoRepository()
const createPagamentoUseCase = new CreatePagamentoUseCase(pagamentoRepository)
const createPagamento = new CreatePagamentoController(createPagamentoUseCase)

export { createPagamento }