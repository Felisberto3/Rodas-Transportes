"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPropinaController = void 0;
class PutPropinaController {
    constructor(putPropinaUseCase) {
        this.putPropinaUseCase = putPropinaUseCase;
    }
    async handle(req, res) {
        const { id, descricao, valor } = req.body;
        try {
            const Propina = await this.putPropinaUseCase.execute(req.body);
            res.status(201).json(Propina);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PutPropinaController = PutPropinaController;
