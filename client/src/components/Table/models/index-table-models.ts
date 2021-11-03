export interface IListProps {
  cartao: string
  cpf: string
  data: string
  donoDaLoja: string
  hora: string
  nomeDaLoja: string
  tipo: string
  valor: number
}

export interface ITableProps {
  list: IListProps[]
}
