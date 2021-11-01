import { Router } from "express"
import multer from "multer"

const multerConfig = multer()
const router = Router()

router.get("/", (req, res) => {
  res.send("Hello World!")
})

export default router
