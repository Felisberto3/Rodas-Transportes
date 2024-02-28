import { CreateAlunoUseCase } from "./createAlunoUseCase";
import { Request, Response } from "express";
import { payLoadGenerator } from "../../../../config/payLoad";
import { createAlunoSchema } from "../../../../config/yup";

class CreateAlunoController {
    constructor(private createAlunoUseCase: CreateAlunoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            await createAlunoSchema.validate(data)

            const Aluno = await this.createAlunoUseCase.execute(data)
    
            // const { email, id, mainAdmin } = Aluno
            
            res.status(201).json({
                Aluno
            })
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreateAlunoController }