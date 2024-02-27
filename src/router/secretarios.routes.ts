import { Router, Request, Response } from "express";
import { createSecretario } from "../module/secretario/useCases/create/index";

const secretarioRouter = Router()

secretarioRouter.post('/create', async (req:Request, res: Response) => {
    return await createSecretario.handle(req,res)
})