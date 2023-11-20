import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'
const Footer = () => (
  <S.FundoFooter>
    <div className="container">
      <S.Logo src={logo} alt="efood" />
      <S.RedesSociais>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </S.RedesSociais>
      <S.TextoFooter>
        A efood é uma plataforma para divulgação de estabelicementos, a
        responsabilidade pela entrega,qualidade <br /> dos produtos é toda do
        estabelicimento contratado
      </S.TextoFooter>
    </div>
  </S.FundoFooter>
)

export default Footer
