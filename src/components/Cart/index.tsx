import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { priceFormatter } from '../../utils'
import { openCheckout } from '../../store/reducers/checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const CloseCart = () => {
    dispatch(close())
  }
  const openCheck = () => {
    dispatch(openCheckout())
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acc, value) => {
      return (acc += value.preco!)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={CloseCart} className="container" />
      <S.SiderBar>
        <>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>R$ {item.preco}0</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                    ></button>
                  </S.CartItem>
                ))}
              </ul>
              <S.PricesCard>
                <span>Valor total</span>
                <span>{priceFormatter(getTotalPrice())}</span>
              </S.PricesCard>
              <Button
                type="button"
                title="clique aqui para continuar com a compra"
                onClick={openCheck}
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <p className="text-cart">
              O carrinho está vazinho, adicione sua refeição para prosseguir.
            </p>
          )}
        </>
      </S.SiderBar>
    </S.CartContainer>
  )
}

export default Cart
