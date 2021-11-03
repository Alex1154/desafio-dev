import express from "express"

import path from "path"
import { routes } from "./routes"
import cors from "cors"
import swagger from "swagger-ui-express"
import swaggerFile from "./swagger.json"
import "reflect-metadata"
import "./database"

const app = express()
app.use(cors())

app.use(express.json())

app.use("/api-docs/", swagger.serve, swagger.setup(swaggerFile))
app.use(routes)

const port = process.env.SERVER_PORT || 3333

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
