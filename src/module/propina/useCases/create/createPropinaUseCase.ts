import { createPropinaDto } from "../../repository/interface";
import { PropinaRepository } from "../../repository/repository";

class CreatePropinaUseCase {
    constructor(private PropinaRepository: PropinaRepository) { }

    async execute(data: createPropinaDto){

        return await this.PropinaRepository.create(data)
    }
}

export { CreatePropinaUseCase }