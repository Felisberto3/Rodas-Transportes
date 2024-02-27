import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";

const router = Router()

// router.get((req:Request, res:Response)=>{
//     console.log('valeu')
// }
// )
router.use('/secretario',secretarioRouter)

export { router }