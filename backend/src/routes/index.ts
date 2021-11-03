import { Router } from "express"
import { uploadRoutes } from "./router"

const routes = Router()

routes.use("/data", uploadRoutes)

export { routes }
