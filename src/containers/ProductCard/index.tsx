import Button from '../../components/Button'
import close from '../../assets/images/close 1.png'
import {
  Card,
  Description,
  Header,
  Imagem,
  ModalContainer,
  ModalText,
  Overlay,
  Title
} from './styles'
import { useState } from 'react'
type Props = {
  image: string
  title: string
  description: string
  id: number
}
const ProductCard = ({ image, title, description }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)
  return (
    <div className="container">
      <Card>
        <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          variant="secondary"
          type="button"
          title="Adicionar ao carrinho"
          onClick={openModal}
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      {isModalVisible && (
        <div className="container">
          <Overlay>
            <ModalContainer>
              <div>
                <img src={image} alt="" />
              </div>
              <ModalText>
                <Header>
                  <img src={close} alt="" onClick={closeModal} />
                </Header>
                <h1>{title}</h1>
                <h2>
                  {description}
                  <br />
                  <br />
                  Serve: de 2 a 3 pessoas.
                </h2>
                <Button
                  variant="secondary"
                  type="button"
                  title="Adicionar ao carrinho"
                >
                  Adicionar ao carrinho
                </Button>
              </ModalText>
            </ModalContainer>
          </Overlay>
        </div>
      )}
    </div>
  )
}

export default ProductCard
