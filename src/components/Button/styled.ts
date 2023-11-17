import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from './index'

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
export const ButtonLink = styled(Link)<Props>`
  width: ${(props) => (props.variant === 'primary' ? '82px' : '435px')};
  height: 20px;
  font-size: 14px;
  margin: 15px;
  padding: 5px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.rosa : cores.branca};
  color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.rosa};
  text-decoration: none;
`
