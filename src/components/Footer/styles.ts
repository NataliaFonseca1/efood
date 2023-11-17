import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.brancaEscura};
  width: 100%;
  height: 298px;
  img {
    margin-top: 40px;
  }
`
export const Title = styled.h4`
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
`
export const Lista = styled.ul`
  display: flex;
  margin-left: 725px;
  margin-top: 16px;
`
export const Item = styled.a`
  width: 24px;
  height: 24px;
  margin: 2px;
`

export const LinkItem = styled(Link)`
  margin-left: 700px;
`
