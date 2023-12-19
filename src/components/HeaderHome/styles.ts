import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  height: 384px;
  display: block;
`
export const Imagem = styled.div`
  img {
    margin: 0 auto;
    display: block;
    padding: 64px 0 138.5px;
  }
`
export const Tittle = styled.h1`
  color: #e66767;
  font-size: 36px;
  font-weight: bold;
  width: 539px;
  line-height: normal;
  font-style: normal;
  font-weight: 900;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 40px;
  @media (max-width: ${breakpoints.mobile}) and (max-width: 1020px) {
    width: 100%;
    gap: 2px;
    margin: 0 auto;
  }
`
