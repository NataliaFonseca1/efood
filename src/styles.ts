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


}
.container{

    width: 100%;
    margin: 0 auto;
}
`
