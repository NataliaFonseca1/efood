import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-bottom: 120px;
  margin-top: 56px;
  max-width: 1024px;
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
    grid-template-columns: 1fr 1fr;
  }
`
