import React from 'react'
import * as S from './styled'
import { IHeaderProps } from './models/index-header-models'

const Header = ({ title, subTitle }: IHeaderProps) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </S.Wrapper>
  )
}

export default Header
