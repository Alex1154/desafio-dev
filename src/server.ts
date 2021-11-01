import express from "express"
import router from "./routes/router"
import path from "path"

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(router)
app.set("views", path.join(__dirname, "views"))

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
