import { Router } from "express"
import { UploadController } from "../controllers/index"
import multer from "multer"

const uploadRoutes = Router()
const uploadoController = new UploadController()

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "text/plain") {
    cb(null, true)
  } else {
    cb(null, false)
    return cb(new Error("Only .txt files are allowed!"))
  }
}

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
  fileFilter,
})

uploadRoutes.get("/import", uploadoController.list)

uploadRoutes.post(
  "/import",
  multerConfig.single("file"),
  async (request, response) => {
    const uploadoController = new UploadController()
    const { file } = request

    const res = await uploadoController.create(file!)

    return response.status(200).json(res)
  }
)

export { uploadRoutes }
