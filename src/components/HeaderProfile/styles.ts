import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: relative;
  display: block;
  justify-content: space-between;
`
export const ImagemProfile = styled.div`
  width: 100%;
  height: 186px;
  flex-shrink: 0;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`
export const Lista = styled.ul`
  display: flex;
  align-items: center;
  height: 186px;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 65.5px;
  img {
    padding-top: 8px;
    margin-left: 43px;
  }
`
export const LinkItem = styled(Link)`
  padding-bottom: 65px;
  padding-top: 63px;
  margin-left: 49px;
  margin-right: 49px;
  color: ${cores.rosa};
  text-decoration: none;
`

export const ImagemBanner = styled.div`
  display: block;
  justify-content: space-between;

  height: 280px;
  background-color: rgba(0, 0, 0, 0.5);
`
export const Title = styled.h1`
  width: 101px;
  height: 33.25px;
  flex-shrink: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  position: relative;
  top: 10px;
  left: 170px;
`
export const Subtitle = styled.h2`
  width: 676px;
  height: 33.25px;
  flex-shrink: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  position: relative;
  top: 170px;
  left: 170px;
`
