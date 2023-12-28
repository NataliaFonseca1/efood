import { ClockLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <ClockLoader color={cores.rosa} />
    </Container>
  )
}

export default Loader
