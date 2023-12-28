import { ImagemBanner, Subtitle, Title } from './styles'
import { useGetBannerQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import Loader from '../Loaders'

const BannerProfile = () => {
  const { id } = useParams()
  const { data: infos } = useGetBannerQuery(id!)
  if (!infos) {
    return <Loader />
  }
  return (
    <>
      <ImagemBanner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${infos.capa})`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container">
          <Title>{infos.tipo}</Title>
          <Subtitle>{infos.titulo}</Subtitle>
        </div>
      </ImagemBanner>
    </>
  )
}
export default BannerProfile
