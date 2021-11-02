import express from "express"
import { router } from "./routes/router"
import path from "path"

const app = express()
app.set("view engine", "ejs")
app.use(express.json())

app.use(router)
app.set("views", path.join(__dirname, "views"))

const port = process.env.SERVER_PORT || 3333

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
