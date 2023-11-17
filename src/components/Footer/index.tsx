import { Container, Item, LinkItem, Lista, Title } from './styles'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twiter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className="container">
      <Container>
        <LinkItem to="/">
          <img src={logo} />
        </LinkItem>
        <Lista>
          <li>
            <Item href="">
              <img src={instagram} />
            </Item>
          </li>
          <li>
            <Item href="">
              <img src={facebook} />
            </Item>
          </li>
          <li>
            <Item href="">
              <img src={twiter} />
            </Item>
          </li>
        </Lista>

        <Title>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos <br />é toda do
          estabelecimento contratado.
        </Title>
      </Container>
    </div>
  )
}
export default Footer
