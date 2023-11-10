import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  flex-shrink: 0;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  background: ${cores.rosa};
  max-width: 70%;
  margin-left: 85px;
  margin-right: 55px;
  max-height: 100%;
  margin-bottom: 15px;
  margin-top: 10px;
`
export const Imagem = styled.div`
  max-width: 97%;
  height: 200px;
  display: block;
  margin: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
`

export const Title = styled.h3`
  color: ${cores.branca};
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 8px;
`

export const Description = styled.p`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  margin: 8px;
`
