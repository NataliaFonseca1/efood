import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: block;
  justify-content: space-between;
`
export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  flex-shrink: 0;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  img {
    padding-top: 40px;
    margin-left: 600px;
  }
`
export const Tittle = styled.h1`
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding-top: 160px;
`
