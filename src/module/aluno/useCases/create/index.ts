import { AlunoRepository } from "../../repository/repository"
import { CreateAlunoController } from "./createSecretarioController"
import { CreateAlunoUseCase } from "./createSecretarioUseCase"


const alunoRepository = new AlunoRepository()
const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository)
const createAluno = new CreateAlunoController(createAlunoUseCase)

export { createAluno }