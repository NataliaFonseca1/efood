import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branca: '#FFFFFF',
  amarelo: '#FFB930',
  brancaEscura: '#FFEBD9'
}

export const breakpoints = {
  mobile: '676px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto,sans-serif ;
list-style: none;
}
body{
  background-color: ${cores.branca};
  color:${cores.rosa};


}
.container{
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.mobile}) {
      max-width: 92%;
      padding: 0 auto;
    }
    @media (min-width: ${breakpoints.tablet}) and (max-width: 1020px) {
      max-width: 95%;
      padding: 0 auto;
    }
}
`
