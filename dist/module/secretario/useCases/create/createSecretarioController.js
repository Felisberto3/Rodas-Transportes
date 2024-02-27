"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecretarioController = void 0;
const payLoad_1 = require("../../../../config/payLoad");
const yup_1 = require("../../../../config/yup");
const error_1 = require("error");
class CreateSecretarioController {
    constructor(createSecretarioUseCase) {
        this.createSecretarioUseCase = createSecretarioUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            await yup_1.createsecretarioSchema.validate(data);
            const secretario = await this.createSecretarioUseCase.execute(data);
            const { email, id, mainAdmin } = secretario;
            const token = (0, payLoad_1.payLoadGenerator)({ email, id, mainAdmin });
            res.status(201).json({
                secretario,
                token
            });
        }
        catch (error) {
            throw new error_1.ServerError(error.message, 400);
        }
    }
}
exports.CreateSecretarioController = CreateSecretarioController;
