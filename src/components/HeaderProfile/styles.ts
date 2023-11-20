import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  height: 186px;
`
export const TextContainer = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 186px;
  gap: 300px;
`
export const LinkItem = styled(Link)`
  height: 57px;
`
