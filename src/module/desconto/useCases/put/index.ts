import { DescontoRepository } from "../../repository/repository"
import { PutDescontoUseCase } from "./putDescontoUseCase"
import { PutDescontoController } from "./putDescontoController"

const descontoRepository = new DescontoRepository()
const putDescontoUseCase = new PutDescontoUseCase(descontoRepository)
const PutDesconto = new PutDescontoController(putDescontoUseCase)

export { PutDesconto }