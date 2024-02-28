import { AlunoRepository } from "../../repository/repository"
import { CreateAlunoController } from "./getAlunoController"
import { CreateAlunoUseCase } from "./getAlunoUseCase"


const alunoRepository = new AlunoRepository()
const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository)
const createAluno = new CreateAlunoController(createAlunoUseCase)

export { createAluno }