import { Request, Response, Router } from "express"
import multer from "multer"

const router = Router()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/temp/uploads")
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-")
    cb(null, fileName)
  },
})
const multerConfig = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "*/txt") {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error("Only .txt format allowed!"))
    }
  },
})
router.get("/", (req: Request, res: Response) => {
  res.render("index")
})

router.post("/temp/uploads", multerConfig.single("file"), (req, res, next) => {
  res.send("file uploaded")
})

export default router
