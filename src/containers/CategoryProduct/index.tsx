import {
  Card,
  Classification,
  Container,
  Description,
  Imagem,
  Infos,
  Title
} from './styles'
import Tag from '../../components/Tag'
import Button from '../../components/Button'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  image: string
  title: string
  info: string[]
  description: string
  classification: string
}
const CategoryProduct = ({
  image,
  info,
  title,
  description,
  classification
}: Props) => (
  <Card>
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <Infos>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
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

    <Button type="link" to="/profile" title="saiba mais">
      saiba mais
    </Button>
  </Card>
)

export default CategoryProduct
