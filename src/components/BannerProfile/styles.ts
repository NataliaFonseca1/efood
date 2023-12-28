import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ImagemBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  color: ${cores.branca};
  margin-bottom: 56px;
  position: relative;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    z-index: 1;
    position: relative;
    max-width: 1024px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
export const Title = styled.h1`
  font-weight: 100;
  font-size: 32px;
  padding-top: 25px;
  padding-bottom: 156px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 2px;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    margin-left: 8px;
  }
`
export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 2px;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
    margin-left: 8px;
  }
`
