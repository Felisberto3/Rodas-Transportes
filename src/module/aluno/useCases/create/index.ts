import { AlunoRepository } from "../../repository/repository"
import { CreateAlunoUseCase } from "./createAlunoUseCase"
import { CreateAlunoController } from "./createAlunoController"

const alunoRepository = new AlunoRepository()
const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository)
const createAluno = new CreateAlunoController(createAlunoUseCase)

export { createAluno }