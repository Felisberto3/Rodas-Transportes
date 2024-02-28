"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAluno = void 0;
const repository_1 = require("../../repository/repository");
const putAlunoController_1 = require("./putAlunoController");
const putAlunoUseCase_1 = require("./putAlunoUseCase");
const alunoRepository = new repository_1.AlunoRepository();
const createAlunoUseCase = new putAlunoUseCase_1.CreateAlunoUseCase(alunoRepository);
const createAluno = new putAlunoController_1.CreateAlunoController(createAlunoUseCase);
exports.createAluno = createAluno;
