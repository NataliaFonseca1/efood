import {
  Container,
  ImgContainer,
  LinkImgs,
  LinkItem,
  Links,
  Lista,
  Title
} from './styles'
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
          <Links>
            <LinkImgs to="/">
              <ImgContainer src={instagram} />
            </LinkImgs>
          </Links>
          <Links>
            <LinkImgs to="/">
              <ImgContainer src={facebook} />
            </LinkImgs>
          </Links>
          <Links>
            <LinkImgs to="/">
              <ImgContainer src={twiter} />
            </LinkImgs>
          </Links>
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
