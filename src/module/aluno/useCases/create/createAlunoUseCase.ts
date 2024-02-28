import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { createAlunoDto } from "../../repository/interface";
import { AlunoRepository } from "../../repository/repository";

class CreateAlunoUseCase {
    constructor(private alunoRepository: AlunoRepository) { }

    async execute({ email, ...data}: createAlunoDto){
        // const userExist = await this.AlunoRepository.findByEmail(email)

        // if (userExist) {
        //     throw new ServerError('Aluno já existe', 400)
        // }

        return await this.alunoRepository.create({ email, ...data })
    }
}

export { CreateAlunoUseCase }