import Button from '../../components/Button'
import close from '../../assets/images/close 1.png'
import { Card, Modal, ModalContainer, Overlay } from './styles'
import { useState } from 'react'
type Props = {
  foto?: string
  preco?: string
  descricao?: string
  nome?: string
  porcao?: string
  id?: number
}
const ProductCard = ({ foto, preco, porcao, descricao, nome }: Props) => {
  console.log('ProductCard Props:', { foto, preco, porcao, descricao, nome })
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
        <img style={{ backgroundImage: `url(${foto})` }}></img>
        <h3>{nome}</h3>
        <p>{getDescription(descricao || '')}</p>
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
              <img src={foto} alt="" />
              <div>
                <h3>{nome}</h3>
                <p>
                  {descricao}
                  <br />
                  <br />
                  <span>{porcao || ''}</span>
                </p>

                <Button
                  variant="secondary"
                  type="button"
                  title="Adicionar ao carrinho"
                >
                  {`Adicionar ao carrinho ${preco || ''}`}
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
