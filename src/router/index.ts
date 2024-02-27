import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";

const router = Router()

router.use('/secretario',secretarioRouter)

export { router }