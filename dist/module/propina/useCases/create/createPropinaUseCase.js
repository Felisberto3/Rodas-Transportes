"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePropinaUseCase = void 0;
const error_1 = require("error");
class CreatePropinaUseCase {
    constructor(PropinaRepository) {
        this.PropinaRepository = PropinaRepository;
    }
    async execute(data) {
        try {
            return await this.PropinaRepository.create(data);
        }