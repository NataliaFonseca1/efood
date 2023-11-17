import {
  Card,
  Classification,
  Container,
  Description,
  DestaqueContainer,
  Imagem,
  Infos,
  Title
} from './styles'

import Button from '../../components/Button'
import estrela from '../../assets/images/estrela.svg'
import { TagContainer } from '../../components/Tag/styles'

type Props = {
  image: string
  title: string
  tipo: string
  description: string
  destacado: string
  classification: string
  id: number
}
const CategoryProduct = ({
  image,
  tipo,
  title,
  destacado,
  description,
  classification,
  id
}: Props) => (
  <Card>
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <Infos>
        <DestaqueContainer>
          <>
            {destacado && (
              <TagContainer>
                <span>Em destaque</span>
              </TagContainer>
            )}
          </>
        </DestaqueContainer>
        <TagContainer>{tipo}</TagContainer>
      </Infos>
    </Imagem>
    <Container>
      <Title>{title}</Title>
      <Classification>
        {classification}
        <img src={estrela} />
      </Classification>
    </Container>

    <Description>{description}</Description>

    <Button type="link" to={`/profile/${id}`} title="saiba mais">
      saiba mais
    </Button>
  </Card>
)

export default CategoryProduct
