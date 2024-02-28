import express from "express";
import * as dotenv from "dotenv";
import { router } from "./router/index";
dotenv.config()


const app = express()
app.use(express.json())
app.use(router)


export { app }

