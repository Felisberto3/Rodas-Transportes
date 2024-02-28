import { PutPropinaUseCase } from "./putPropinaUseCase";
import { Request, Response } from "express";

class PutPropinaController {
    constructor(private putPropinaUseCase: PutPropinaUseCase) { }

    async handle(req: Request, res: Response) {
        const { id, descricao, valor } = req.body


        try {

            const Propina = await this.putPropinaUseCase.execute(req.body)

            res.status(201).json(Propina)

        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { PutPropinaController }