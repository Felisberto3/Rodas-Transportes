"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propinaRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/propina/useCases/create/index");
const propinaRouter = (0, express_1.Router)();
exports.propinaRouter = propinaRouter;
propinaRouter.post('/create', async (req, res) => {
    return await index_1.createPropina.handle(req, res);
});
