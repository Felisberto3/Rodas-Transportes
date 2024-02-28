import { Router, Request,Response } from "express";
import { createPropina } from "../module/propina/useCases/create/index";
import { getPropina } from "../module/propina/useCases/get/index";

const propinaRouter = Router()

propinaRouter.post('/create', async (req:Request, res:Response) => {
    return await createPropina.handle(req,res)
})

propinaRouter.post('/get', async (req:Request, res:Response) => {
    return await getPropina.handle(req,res)
})

export { propinaRouter }