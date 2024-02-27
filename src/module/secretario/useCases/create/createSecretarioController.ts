import { CreateSecretarioUseCase } from "./createSecretarioUseCase";
import { Request, Response } from "express";
import { payLoadGenerator } from "../../../../config/payLoad";
import { createsecretarioSchema } from "../../../../config/yup";
import { ServerError } from "error";

class CreateSecretarioController {
    constructor(private createSecretarioUseCase: CreateSecretarioUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            await createsecretarioSchema.validate(data)

            const secretario = await this.createSecretarioUseCase.execute(data)
    
            const { email, id, mainAdmin } = secretario
            const token = payLoadGenerator({ email, id, mainAdmin })
            
            res.status(201).json({
                secretario,
                token
            })
        } catch (error: any) {
            throw new ServerError(error.message, 400)
        }
    }
}

export { CreateSecretarioController }