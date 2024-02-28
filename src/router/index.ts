import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";
import { propinaRouter } from "./propina.routes";
import { multaRouter } from "./multa.routes";
import { addressRouter } from "./address.routes";
import { alunoRouter } from "./aluno.routes";

const router = Router()

router.use('/secretario',secretarioRouter)
router.use('/aluno',alunoRouter)
router.use('/propina',propinaRouter)
router.use('/multa',multaRouter)
router.use('/address',addressRouter)


export { router }