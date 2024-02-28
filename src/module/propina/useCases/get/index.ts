import { PropinaRepository } from "../../repository/repository"
import { CreatePropinaUseCase } from "./getPropinaUseCase"
import { CreatePropinaController } from "./getPropinaController"

const propinaRepository = new PropinaRepository()
const createPropinaUseCase = new CreatePropinaUseCase(propinaRepository)
const createPropina = new CreatePropinaController(createPropinaUseCase)

export { createPropina }