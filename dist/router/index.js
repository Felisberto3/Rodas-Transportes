"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const secretarios_routes_1 = require("./secretarios.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('secretario', secretarios_routes_1.secretarioRouter);