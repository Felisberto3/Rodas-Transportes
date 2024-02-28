import { Router, Request,Response } from "express";
import { createPropina } from "../module/propina/useCases/create/index";

const propinaRouter = Router()

propinaRouter.post('/create', async (req:Request, res:Response) => {
    return await createPropina.handle(req,res)
})

export { propinaRouter }