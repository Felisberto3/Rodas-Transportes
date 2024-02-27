import { CreateSecretarioUseCase } from "./createSecretarioUseCase";
import { Request, Response } from "express";

class CreateSecretarioController {
    constructor(private createSecretarioUseCase: CreateSecretarioUseCase ) { }

    async handle(req: Request, res: Response ) {

    }
}

export { CreateSecretarioController }