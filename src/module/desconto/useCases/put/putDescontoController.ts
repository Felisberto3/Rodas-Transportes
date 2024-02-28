import { PutDescontoUseCase } from "./putDescontoUseCase";
import { Request, Response } from "express";

class PutDescontoController {
    constructor(private putDescontoUseCase: PutDescontoUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { mainAdmin,userId, ...data } = req.body


        try {

            if (!mainAdmin) {
                return res.status(400).json({ message:"Apenas a administradora pode actualizar as Descontos"})
            }

            const Desconto = await this.putDescontoUseCase.execute({id, ...data})

            return res.status(201).json(Desconto)

        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { PutDescontoController }