import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../../components/Button/styled'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
  color: ${cores.branca};
  margin-bottom: 32px;
  position: relative;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    background-size: cover;
  }

  h3 {
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${cores.brancaEscura};
    border: none;
    color: ${cores.rosa};
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const ModalContainer = styled.div`
  color: ${cores.branca};
  max-width: 1024px;
  height: 334px;
  flex-shrink: 0;
  display: block;
  z-index: 1;
  position: relative;
  background-color: #e66767;
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    max-width: 92%;
    height: 350px;
    padding: 0 auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    height: 85vh;
    width: 350px;
    overflow-y: scroll;
    padding-bottom: 5px;
  }
  header {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 8px;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  main {
    display: flex;
    padding: 0 32px;
    @media (max-width: ${breakpoints.mobile}) {
      display: block;
      text-align: center;
    }
  }
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-right: 24px;
    @media (max-width: ${breakpoints.mobile}) {
      display: flex;
      height: 200px;
      width: 200px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 5px;
    }
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    display: block;
    font-size: 14px;
    margin: 16px 0;
  }

  ${ButtonContainer} {
    background-color: ${cores.brancaEscura};
    padding: 4px 8px;
    font-size: 14px;
    border: none;
    color: ${cores.rosa};
    font-weight: bold;
    cursor: pointer;
    width: 218px;
    height: 24px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
