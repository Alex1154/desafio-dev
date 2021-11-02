import express from "express"
import fs from "fs"
import { Readable } from "stream"

const read = express()

fs.readdir("./src/temp/uploads", function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err)
  }
  //listing all files using forEach

  files.forEach((file) => {
    txtFiles.push(file)
  })
})
const txtFiles = []
export { txtFiles }
