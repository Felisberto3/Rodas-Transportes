import { Request, Response } from "express";
import { CreatePagamentoUseCase } from "./createPagamentoUseCase";
import { createPagamentoSchema } from "../../../../config/yup";

class CreatePagamentoController {
    constructor(private createPagamentoUseCase: CreatePagamentoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            // await createPagamentoSchema.validate(data)

            const firstNumber =  new Date().getUTCMilliseconds()
            const secondNumber =  new Date().getUTCMilliseconds()
            const year =  new Date().getFullYear()

            const numeroDeFactura = `${firstNumber}.${secondNumber}/${year}`;
            
            

            // const Pagamento = await this.createPagamentoUseCase.execute(data)
    
            
            res.status(201).json(numeroDeFactura)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreatePagamentoController }