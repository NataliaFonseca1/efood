import styled from 'styled-components'
import { TagContainer } from '../../components/Tag/styles'
import { ButtonLink } from '../../components/Button/styled'

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
  width: 472px;
  max-height: 100%;
  ${TagContainer} {
    cursor: pointer;
    margin-top: 15px;
    margin-left: 8px;
    padding: 5px;
    width: 61px;
  }
  ${ButtonLink} {
    margin-left: 7px;
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

  margin-right: 16px;
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const DestaqueContainer = styled.div`
  margin-left: 255px;
  ${TagContainer} {
    cursor: pointer;
    margin-top: 16px;
    width: 121px;
  }
`
export const Title = styled.h3`
  color: #e66767;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Classification = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
    width: 21px;
    height: 21px;
  }

  h4 {
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 8px;
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
  margin-left: 7px;
`
