import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '../../components/Button'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { closeCheckout } from '../../store/reducers/checkout'
import { open, clear } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { getTotalPrice, priceFormatter } from '../../utils'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const totalPrice = getTotalPrice(items)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const handleCheckout = () => {
    dispatch(closeCheckout())
    setPayment(false)
  }
  const returnToCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Este campo é obrigatório'),

      address: Yup.string().required('Este campo é obrigatório'),

      city: Yup.string().required('Este campo é obrigatório'),

      cep: Yup.string().required('Este campo é obrigatório'),

      number: Yup.string().required('Este campo é obrigatório'),

      complement: Yup.string(),

      nameCard: Yup.string().required('Este campo é obrigatório'),

      numberCard: Yup.string().required('Este campo é obrigatório'),
      cardCode: Yup.string().required('Este campo é obrigatório'),
      expiresMonth: Yup.string(),
      expiresYear: Yup.string().required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            addressNumber: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })
  const checkInputHasError = (name: string) => {
    const isTouched = name in form.touched
    const isInvalid = name in form.errors
    const hasError = isTouched && isInvalid
    console.log('erros', hasError)
    return hasError
  }
  const goToPayment = () => {
    if (
      !form.errors.receiver &&
      form.touched.receiver &&
      !form.errors.address &&
      form.touched.address &&
      !form.errors.city &&
      form.touched.city &&
      !form.errors.cep &&
      form.touched.cep &&
      !form.errors.number &&
      form.touched.number
    ) {
      setPayment(true)
    }
  }
  const confirmPayment = () => {
    form.handleSubmit()
    console.log('passou', form, isSuccess, data)
  }

  return (
    <div>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={handleCheckout} />
        <S.SiderBar>
          <div>
            <form onSubmit={form.handleSubmit}>
              {!payment && !isSuccess && (
                <>
                  <h1 className="text-cart">Entrega</h1>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('receiver') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        type="number"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup marginBottom="24px">
                    <label htmlFor="complement">Complemento</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <Button
                    type="button"
                    title="clique aqui para continuar com a compra"
                    onClick={goToPayment}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    title="clique aqui para continuar com a compra"
                    onClick={returnToCart}
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              )}

              {payment && !isSuccess && (
                <>
                  <h1 className="text-cart">
                    Pagamento - Valor a pagar {priceFormatter(totalPrice)}
                  </h1>
                  <S.InputGroup>
                    <label htmlFor="nameCard">Nome no cartão</label>
                    <input
                      type="text"
                      id="nameCard"
                      name="nameCard"
                      value={form.values.nameCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('nameCard') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxwidth="228px">
                      <label htmlFor="numberCard">Número do Cartão</label>
                      <input
                        type="number"
                        id="numberCard"
                        name="numberCard"
                        value={form.values.numberCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numberCard') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxwidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="number"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>

                  <S.Row marginBottom="24px">
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês do Vencimento</label>
                      <input
                        type="number"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano do Vencimento</label>
                      <input
                        type="number"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <Button
                    type="button"
                    title="clique aqui para finalizar a compra"
                    onClick={confirmPayment}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    title="clique aqui para editar o endereço"
                    onClick={() => setPayment(false)}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </>
              )}
            </form>
            {isSuccess && data && payment && (
              <>
                <h3>Pedido realizado - {data.orderId}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.{' '}
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button
                  type="button"
                  title="clique aqui para concluir sua compra"
                  onClick={() => location.reload()}
                >
                  Concluir
                </Button>
              </>
            )}
          </div>
        </S.SiderBar>
      </S.CartContainer>
    </div>
  )
}

export default Checkout
