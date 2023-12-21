import styled from 'styled-components'
import { ButtonContainer } from '../Button/styled'
import fechar from '../../assets/images/fechar.png'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const SiderBar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 250px;
  }
  ${ButtonContainer} {
    background-color: ${cores.brancaEscura};
    height: 24px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 16px;
    margin-bottom: 1164px;
    max-width: 344px;
    width: 100%;
    @media (max-width: ${breakpoints.mobile}) {
      width: 92%;
    }
  }
  .text-cart {
    color: #ffebd9;
    font-size: 18px;
    text-align: center;
    padding-top: 50px;
  }
`
export const CartItem = styled.li`
  position: relative;
  max-width: 344px;
  width: 100%;
  margin-top: 32px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  background-color: #ffebd9;
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    width: 92%;
  }
  h3 {
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 16px;
    margin-top: 8px;
    margin-left: 8px;
    @media (max-width: ${breakpoints.mobile}) {
      margin-left: 2px;
      text-align: start;
    }
  }
  p {
    color: #e66767;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-left: 8px;

    margin-bottom: 33px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 8px;
    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 12px;
  }
`
export const PricesCard = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 40px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  span {
    color: #ffebd9;
  }
`
