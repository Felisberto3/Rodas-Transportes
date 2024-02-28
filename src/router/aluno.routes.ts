import { Router, Request, Response } from "express";
import { createAluno } from "../module/aluno/useCases/create/index";

const alunoRouter = Router()

alunoRouter.post('/create', async (req:Request, res: Response) => {
    return await createAluno.handle(req,res)
})

export { alunoRouter }