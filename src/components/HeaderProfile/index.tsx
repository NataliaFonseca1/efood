import {
  ImagemProfile,
  ImagemBanner,
  Lista,
  Title,
  Subtitle,
  LinkItem
} from './styles'
import logo from '../../assets/images/logo.svg'
import bannerHome from '../../assets/images/vector.png'
import bannerProfile from '../../assets/images/profile.png'

const HeaderProfile = () => {
  return (
    <>
      <ImagemProfile style={{ backgroundImage: `url(${bannerHome})` }}>
        <div className="container">
          <nav>
            <Lista>
              <LinkItem to="/profile">Restaurantes</LinkItem>
              <LinkItem to="/">
                <img src={logo} />
              </LinkItem>
              <LinkItem to="/profile"> 0 produto(s) no carrinho</LinkItem>
            </Lista>
          </nav>
        </div>
      </ImagemProfile>
      <ImagemBanner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bannerProfile})`,
          backgroundBlendMode: 'multiply' // Adiciona essa linha
        }}
      >
        <Title>Italiana</Title>
        <Subtitle>La Dolce Vita Trattoria</Subtitle>
      </ImagemBanner>
    </>
  )
}
export default HeaderProfile
