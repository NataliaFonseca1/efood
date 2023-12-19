import styled from 'styled-components'
import { TagContainer } from '../../components/Tag/styles'
import { ButtonLink } from '../../components/Button/styled'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  width: 472px;
  height: 398px;
  position: relative;
  border: 1px solid ${cores.rosa};

  ${TagContainer} {
    cursor: pointer;
    margin-top: 15px;
    margin-left: 8px;
    padding: 5px;
    width: 61px;
  }
  ${ButtonLink} {
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-left: 7px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 auto;
    margin: 0 auto;
    width: 100%;
    height: 104%;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    padding: 0 auto;
    margin: 0 auto;
    width: 60%;
    height: 104%;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 217px;
  object-fit: cover;
  background-size: cover;
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
  margin-right: 8px;
  ${TagContainer} {
    margin-right: 8px;
    height: 26px;
    width: 61px;
    padding: 6px 4px;
  }
`
export const DestaqueContainer = styled.div`
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
`

export const Classification = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  img {
    margin-right: 8px;
    width: 21px;
    height: 21px;
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
  margin: 16px 8px;
`
