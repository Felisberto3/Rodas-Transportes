import { CalendarioRepository } from "../../repository/repository"
import { GetCalendarioController } from "./getSecretarioController"
import { GetCalendarioUseCase } from "./getSecretarioUseCase"


const calendarioRepository = new CalendarioRepository()
const getCalendarioUseCase = new GetCalendarioUseCase(calendarioRepository)
const getCalendario = new GetCalendarioController(getCalendarioUseCase)

export { getCalendario }