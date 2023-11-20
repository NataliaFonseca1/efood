import { LinkItem, Header, TextContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerHome from '../../assets/images/vector.png'

const HeaderProfile = () => {
  return (
    <Header style={{ backgroundImage: `url(${bannerHome})` }}>
      <TextContainer>
        <p>Restaurantes</p>
        <LinkItem to="/">
          <img src={logo} />
        </LinkItem>
        <p> 0 produto(s) no carrinho</p>
      </TextContainer>
    </Header>
  )
}
export default HeaderProfile
