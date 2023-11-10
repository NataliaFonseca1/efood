import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 435px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${cores.branca};
  color: ${cores.rosa};
  margin: 8px;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  width: 82px;
  height: 20px;
  font-size: 14px;
  margin: 15px;
  padding: 5px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  text-decoration: none;
`
