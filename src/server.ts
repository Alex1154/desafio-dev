import express from "express"
import router from "./routes/router"

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
