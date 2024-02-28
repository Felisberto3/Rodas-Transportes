import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";
import { propinaRouter } from "./propina.routes";
import { multaRouter } from "./multa.routes";

const router = Router()

router.use('/secretario',secretarioRouter)
router.use('/propina',propinaRouter)
router.use('/multa',multaRouter)


export { router }