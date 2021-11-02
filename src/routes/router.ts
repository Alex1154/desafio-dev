import { Request, Response, Router } from "express"
import multer from "multer"
import { txtFiles } from "../services/setData"
import fs from "fs"
import readline from "readline"
import { Readable } from "stream"

const router = Router()
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
router.get("/", (req: Request, res: Response) => {
  res.render("index")
})

router.post(
  "/temp/uploads",
  multerConfig.single("file"),
  (req: Request, res: Response, next) => {
    res.send("file uploaded")
    storage
  }
)
const file = []

router.get("/txt/:id", async (req: Request, res: Response) => {
  const id = req.params.id
  const dirName = txtFiles[id].toString()

  const file = readline.createInterface({
    input: fs.createReadStream(`./src/temp/uploads/${dirName}`),
    output: process.stdout,
    terminal: false,
  })
  const fileObj: Object[] = []
  for await (let line of file) {
    const lineSplit = line

    fileObj.push({
      Type: Number(lineSplit.slice(0, 1)),
      Date: new Date(
        `${lineSplit.slice(1, 5)}-${lineSplit.slice(5, 7)}-${lineSplit.slice(
          7,
          9
        )}`
      ).toISOString(),
      Value: Number(lineSplit.slice(9, 19)),
      CPF: Number(lineSplit.slice(19, 30)),
      Card: lineSplit.slice(30, 42),
      Time: lineSplit.slice(42, 48),
      Owner: lineSplit.slice(48, 62),
      Name: lineSplit.slice(62, 81),
    })
  }
  return res.json(fileObj)
})

export { router }
