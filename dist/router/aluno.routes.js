"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/aluno/useCases/create/index");
const alunoRouter = (0, express_1.Router)();
exports.alunoRouter = alunoRouter;
alunoRouter.post('/create', async (req, res) => {
    return await index_1.createAluno.handle(req, res);
});
