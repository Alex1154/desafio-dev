import React from 'react'
import { ITableProps } from './models/index-table-models'
import * as S from './styled'

const Table = ({ list }: ITableProps) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Data</th>
          <th>Valor</th>
          <th>Cpf</th>
          <th>Cartão</th>
          <th>Hora</th>
          <th>DonoDaLoja</th>
          <th>NomeLoja</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.tipo}</td>
            <td>{item.data}</td>
            <td>{item.valor}</td>
            <td>{item.cpf}</td>
            <td>{item.cartao}</td>
            <td>{item.hora}</td>
            <td>{item.donoDaLoja}</td>
            <td>{item.nomeDaLoja}</td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}

export default Table
