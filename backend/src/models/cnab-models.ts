import { v4 as uuidv4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("cnab_table")
class Cnab {
  @PrimaryColumn()
  id?: string

  @Column()
  tipo: string

  @Column()
  data: string

  @Column()
  valor: number

  @Column()
  cpf: string

  @Column()
  cartao: string

  @Column()
  hora: string

  @Column()
  donoDaLoja: string

  @Column()
  nomeDaLoja: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    this.tipo = ""
    this.data = ""
    this.cartao = ""
    this.valor = 0
    this.cpf = ""
    this.hora = ""
    this.donoDaLoja = ""
    this.nomeDaLoja = ""
    this.created_at = new Date()
  }
}

export { Cnab }
