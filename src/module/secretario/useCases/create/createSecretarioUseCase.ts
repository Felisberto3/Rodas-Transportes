import { createSecretarioDto } from "../../repository/interface";
import { SecretarioRepository } from "../../repository/repository";

class CreateSecretarioUseCase {
    constructor(private secretarioRepository: SecretarioRepository) { }

    async execute(data: createSecretarioDto){
        return await this.secretarioRepository.create(data)
    }
}

export { CreateSecretarioUseCase }