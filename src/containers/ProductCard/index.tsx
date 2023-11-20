import Button from '../../components/Button'
import close from '../../assets/images/close 1.png'
import { Card, Modal, ModalContainer, Overlay } from './styles'
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
  const getDescription = (description: string) => {
    if (description.length > 300) {
      return description.slice(0, 300) + '...'
    }
    return description
  }
  return (
    <div className="container">
      <Card>
        <img style={{ backgroundImage: `url(${image})` }}></img>
        <h3>{title}</h3>
        <p>{getDescription(description)}</p>
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
        <Modal>
          <ModalContainer className="container">
            <header>
              <img src={close} alt="" onClick={closeModal} />
            </header>
            <main>
              <img src={image} alt="" />
              <div>
                <h3>{title}</h3>
                <p>
                  {description}
                  <br />
                  <br />
                  <span>Serve: de 2 a 3 pessoas.</span>
                </p>

                <Button
                  variant="secondary"
                  type="button"
                  title="Adicionar ao carrinho"
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </main>
          </ModalContainer>
          <Overlay onClick={closeModal} />
        </Modal>
      )}
    </div>
  )
}

export default ProductCard
