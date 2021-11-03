import React from 'react'
import { Header } from '../../../components'
import { ITemplateMain } from './models/index-templateMain-models'
import * as S from './styled'

const TemplateMain = ({ children }: ITemplateMain) => {
  return (
    <>
      <Header
        title="Processo seletivo bycoders_"
        subTitle="Faça o upload de aquivo no formato .txt"
      />
      <S.Main>{children}</S.Main>
    </>
  )
}

export default TemplateMain
