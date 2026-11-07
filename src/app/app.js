import express from "express"
import authRouter from "../routes/auth.routes.js";

const app = express()

app.use(express.json());


app.use("/aopi/auth", authRouter)


export default app