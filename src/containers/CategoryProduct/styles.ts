import styled from 'styled-components'
import { TagContainer } from '../../components/Tag/styles'

export const Card = styled.div`
  flex-shrink: 0;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  background: #fff;
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 70px;
  padding-bottom: 15px;
  width: 80%;
  max-height: 100%;
  ${TagContainer} {
    cursor: pointer;
    margin-top: 15px;
    padding: 5px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
`
export const Infos = styled.div`
  color: #ffebd9;
  text-align: center;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  margin-left: 190px;
  margin-right: 5px;
`
export const Title = styled.h3`
  color: #e66767;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Classification = styled.div`
  display: flex;
  align-items: center;

  h4 {
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    img {
      margin: 4px;
    }
  }
`
export const Container = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Description = styled.p`
  color: #e66767;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  padding-top: 8px;
  padding-bottom: 10px;
`
