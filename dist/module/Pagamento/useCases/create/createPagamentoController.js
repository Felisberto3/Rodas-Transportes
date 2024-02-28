"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoController = void 0;
class CreatePagamentoController {
    constructor(createPagamentoUseCase) {
        this.createPagamentoUseCase = createPagamentoUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            // await createPagamentoSchema.validate(data)
            const firstNumber = new Date().getUTCMilliseconds();
            const secondNumber = new Date().getUTCMilliseconds();
            const year = new Date().getFullYear();
            const numeroDeFactura = `${firstNumber}.${secondNumber}/${year}`;
            // const Pagamento = await this.createPagamentoUseCase.execute(data)
            res.status(201).json(numeroDeFactura);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreatePagamentoController = CreatePagamentoController;
