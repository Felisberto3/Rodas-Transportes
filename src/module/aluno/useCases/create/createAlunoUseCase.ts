import { ServerError } from "../../../../error/index";
import { createAlunoDto } from "../../repository/interface";
import { AlunoRepository } from "../../repository/repository";

class CreateAlunoUseCase {
    constructor(private alunoRepository: AlunoRepository) { }

    async execute({ BI, ...data}: createAlunoDto){
        const userExist =  await this.alunoRepository.findByBInumber(BI)

        if (userExist) {
            throw new ServerError('Aluno já existe', 400)
        }

        return await this.alunoRepository.create({ BI, ...data })
    }
}

export { CreateAlunoUseCase }