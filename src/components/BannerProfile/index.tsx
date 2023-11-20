import { ImagemBanner, Subtitle, Title } from './styles'
import bannerProfile from '../../assets/images/profile.png'

const BannerProfile = () => {
  return (
    <>
      <ImagemBanner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bannerProfile})`,
          backgroundBlendMode: 'multiply' // Adiciona essa linha
        }}
      >
        <div className="container">
          <Title>Italiana</Title>
          <Subtitle>La Dolce Vita Trattoria</Subtitle>
        </div>
      </ImagemBanner>
    </>
  )
}
export default BannerProfile
