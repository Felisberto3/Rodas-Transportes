import { CreateSecretarioUseCase } from "./createSecretarioUseCase";
import { Request, Response } from "express";
import { payLoadGenerator } from "../../../../config/payLoad";

class CreateSecretarioController {
    constructor(private createSecretarioUseCase: CreateSecretarioUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body
        const secretario = await this.createSecretarioUseCase.execute(data)

        const { email, id, mainAdmin } = secretario
        const token = payLoadGenerator({ email, id, mainAdmin })
        res.status(201).json({
            secretario,
            token
        })
    }
}

export { CreateSecretarioController }