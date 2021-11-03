import { Router } from "express"
import { UploadController } from "../controllers/index"
import multer from "multer"
import fs from "fs"
import path from "path"

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

uploadRoutes.get("/delete", async (request, response) => {
  // create a method to delete all local files inside the temp/uploads folder and unload uploadadoController

  fs.readdir("./src/temp/uploads", async (err, files) => {
    if (err) throw err
    const { file } = request
    for (const file of files) {
      fs.unlink(path.join("./src/temp/uploads", file), (err) => {
        if (err) throw err
      })
    }

    await uploadoController.unloadFile(file!)
  })

  response.status(200).json({ message: "All files deleted successfully" })
})

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
