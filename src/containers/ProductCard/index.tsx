import Button from '../../components/Button'
import close from '../../assets/images/close 1.png'
import { Card, Modal, ModalContainer, Overlay } from './styles'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { priceFormatter } from '../../utils'

type Props = {
  item: Item
}
const ProductCard = ({ item }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)
  const getDescription = (description: string) => {
    if (description.length > 300) {
      return description.slice(0, 300) + '...'
    }
    return description
  }
  console.log('teste', item)
  const dispatch = useDispatch()
  const AddCart = () => {
    dispatch(add(item))
    dispatch(open())
    closeModal()
  }
  return (
    <div className="container">
      <Card>
        <img style={{ backgroundImage: `url(${item.foto})` }}></img>
        <h3>{item.nome}</h3>
        <p>{getDescription(item.descricao || '')}</p>
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
          <ModalContainer>
            <header>
              <img src={close} alt="" onClick={closeModal} />
            </header>
            <main>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>
                  {item.descricao}
                  <br />
                  <br />
                  <span>{item.porcao || ''}</span>
                </p>
                <Button
                  variant="secondary"
                  type="button"
                  title="Adicionar ao carrinho"
                  onClick={AddCart}
                >
                  {`Adicionar ao carrinho-${priceFormatter(item.preco)}`}
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
