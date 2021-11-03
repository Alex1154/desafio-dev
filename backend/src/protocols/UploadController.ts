import { IDataDtos } from "../Dtos/DataDtos"
import { Request, Response } from "express"

export interface UploadControllerInterface {
  loadFile(file: Express.Multer.File): Promise<IDataDtos[]>
  create(file: Express.Multer.File): Promise<string>
  list(request: Request, response: Response): Promise<Response>
}
