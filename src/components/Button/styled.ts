import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from './index'

export const ButtonContainer = styled.button`
  width: 435px;
  height: 24px;
  flex-shrink: 0;
  background-color: ${cores.brancaEscura};
  color: ${cores.rosa};
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
export const ButtonLink = styled(Link)<Props>`
  width: ${(props) => (props.variant === 'primary' ? '82px' : '435px')};
  height: 20px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.rosa : cores.brancaEscura};
  color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.brancaEscura};
  text-decoration: none;
`
