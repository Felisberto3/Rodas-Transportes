"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecretarioController = void 0;
const payLoad_1 = require("../../../../config/payLoad");
class CreateSecretarioController {
    constructor(createSecretarioUseCase) {
        this.createSecretarioUseCase = createSecretarioUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        const secretario = await this.createSecretarioUseCase.execute(data);
        const { email, id, mainAdmin } = secretario;
        const token = (0, payLoad_1.payLoadGenerator)({ email, id, mainAdmin });
        res.status(201).json({
            secretario,
            token
        });
    }
}
exports.CreateSecretarioController = CreateSecretarioController;
