import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";
import { propinaRouter } from "./propina.routes";

const router = Router()

router.use('/secretario',secretarioRouter)
router.use('/propina',propinaRouter)


export { router }