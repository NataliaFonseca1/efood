import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branca: '#FFFFFF',
  amarelo: '#FFB930',
  brancaEscura: '#FFEBD9'
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
  padding-top: 40px;

}
.container{
  max-width: 1366px;
  width: auto;
  height: auto;
  margin: 0;
}
`
