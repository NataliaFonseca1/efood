import { LinkItem, Header, TextContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerHome from '../../assets/images/vector.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const HeaderProfile = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const OpenCart = () => {
    dispatch(open())
  }
  return (
    <Header style={{ backgroundImage: `url(${bannerHome})` }}>
      <div className="container">
        <TextContainer>
          <p>Restaurantes</p>
          <LinkItem to="/">
            <img src={logo} />
          </LinkItem>
          <a onClick={OpenCart}> {items.length} - produtos no carrinho</a>
        </TextContainer>
      </div>
    </Header>
  )
}
export default HeaderProfile
