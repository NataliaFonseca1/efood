import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../../components/Button/styled'

export const Card = styled.div`
  flex-shrink: 0;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  background: ${cores.rosa};
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Imagem = styled.div`
  display: block;
  max-width: 100%;
  width: 430px;
  height: 167px;
  margin: 8px;

  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
`

export const Title = styled.h3`
  color: ${cores.branca};
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 8px;
`

export const Description = styled.p`
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  margin: 8px;
`
export const ModalContainer = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 1024px;
  height: auto;
  flex-shrink: 0;
  display: flex;
  z-index: 1;
  position: relative;

  img {
    width: 280px;
    height: 280px;
    margin: 32px;
    object-fit: cover;
    flex-shrink: 0;
  }
  ${ButtonContainer} {
    margin-right: 470px;
    margin-bottom: 59px;
    width: 218px;
    height: 24px;
    flex-shrink: 0;
  }
`
export const ModalText = styled.aside`
  height: 176px;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 548px;
    margin-top: 4px;
    margin-bottom: 16px;
    width: 100%;
    display: flex;
  }
  h2 {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    margin-right: 32px;

    margin-bottom: 16px;
  }
`

export const Header = styled.header`
  > img {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-bottom: 0;
    margin-left: 650px;
    cursor: pointer;
  }
`
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* Ensure the overlay is above other elements */
`
