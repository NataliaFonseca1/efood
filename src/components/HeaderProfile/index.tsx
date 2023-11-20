import { LinkItem, Header } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerHome from '../../assets/images/vector.png'

const HeaderProfile = () => {
  return (
    <>
      <Header style={{ backgroundImage: `url(${bannerHome})` }}>
        <p>Restaurantes</p>
        <LinkItem to="/">
          <img src={logo} />
        </LinkItem>
        <p> 0 produto(s) no carrinho</p>
      </Header>
    </>
  )
}
export default HeaderProfile
