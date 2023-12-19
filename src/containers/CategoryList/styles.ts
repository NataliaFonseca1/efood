import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 48px;
  column-gap: 80px;
  padding-bottom: 120px;
  max-width: 1024px;
  padding-top: 80px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    padding: 0 auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
  }
`
