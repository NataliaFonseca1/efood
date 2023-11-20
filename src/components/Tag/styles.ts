import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  height: 26px;
  width: 61px;
  font-size: 12px;
  padding: 4px 6px;
`
