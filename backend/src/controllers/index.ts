import fs from "fs"
import { Request, Response } from "express"

import { request, response } from "express"
import { getRepository } from "typeorm"
import { Cnab } from "../models/cnab-models"
import readLine from "readline"
import { IDataDtos } from "../Dtos/DataDtos"
import { UploadControllerInterface } from "../protocols/UploadController"

class UploadController implements UploadControllerInterface {
  async loadFile(file: Express.Multer.File): Promise<IDataDtos[]> {
    const readeble = fs.createReadStream(file.path)
    const datas: IDataDtos[] = []
    const rl = readLine.createInterface({
      input: readeble,
    })

    for await (const line of rl) {
      const tipo = line.slice(0, 1)
      const data = line.slice(1, 9)
      const valor = Number(line.slice(9, 19)) / 100
      const cpf = line.slice(19, 30)
      const cartao = line.slice(30, 42)
      const hora = line.slice(41, 47)
      const donoDaLoja = line.slice(48, 61)
      const nomeDaLoja = line.slice(61, 80)
      datas.push({
        tipo,
        data,
        valor,
        cpf,
        cartao,
        hora,
        donoDaLoja,
        nomeDaLoja,
      })
    }
    return datas
  }
  async create(file: Express.Multer.File): Promise<string> {
    const files = await this.loadFile(file)
    const repository = getRepository(Cnab)
    const dataToSave = repository.create(files)
    await repository.save(dataToSave)

    return "created"
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const repository = getRepository(Cnab)
    const responseDatas = await repository.query(`
        select * from Cnab_table
      `)

    return response.status(200).json(responseDatas)
  }
}

export { UploadController }
