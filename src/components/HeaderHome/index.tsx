import { Imagem, Tittle } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerHome from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'
const HeaderHome = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerHome})` }}>
      <div className="container">
        <Link to="/">
          <img src={logo} />
        </Link>

        <Tittle>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Tittle>
      </div>
    </Imagem>
  )
}

export default HeaderHome
