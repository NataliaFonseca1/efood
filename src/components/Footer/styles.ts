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
  flex-shrink: 0;
  img {
    position: relative;
    left: 580px;
    width: 125px;
    height: 57.5px;
    flex-shrink: 0;
    align-items: center;
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
  margin-top: 40px;
`
export const Lista = styled.ul`
  display: flex;
  align-items: center;

  width: 125px;
  flex-shrink: 0;
`
export const Links = styled.li`
  max-width: 50%;
  margin: 5px;
`
export const LinkItem = styled(Link)`
  max-width: 100%;
  height: 20px;
  margin: 5px;
`
export const LinkImgs = styled(Link)`
  margin-right: 21px;
`
export const ImgContainer = styled.img`
  margin-right: 15px;
  max-width: 100%;
`
