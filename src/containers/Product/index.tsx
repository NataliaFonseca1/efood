import { ButtonContainer } from '../../components/Button/styled'
import { Card, Description, Imagem, Title } from './styles'
type Props = {
  image: string
  title: string
  description: string
}
const Product = ({ image, title, description }: Props) => (
  <Card>
    <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
    <Title>{title}</Title>
    <Description>{description}</Description>

    <ButtonContainer type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </ButtonContainer>
  </Card>
)

export default Product
