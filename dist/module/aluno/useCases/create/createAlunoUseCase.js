"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreateAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute({ BI, ...data }) {
        const userExist = await this.alunoRepository.findByBInumber(BI);
        if (userExist) {
            throw new index_1.ServerError('Aluno já existe', 400);
        }
        return await this.alunoRepository.create({ BI, ...data });
    }
}
exports.CreateAlunoUseCase = CreateAlunoUseCase;
