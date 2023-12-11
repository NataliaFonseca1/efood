import { useEffect } from 'react'
import { List } from './styles'
import ProductCard from '../ProductCard'

export type MenuItem = {
  foto?: string
  preco?: number
  id?: number
  nome?: string
  descricao?: string
  porcao?: string
}

export type Props = {
  products: MenuItem[]
}

const ProductList = ({ products }: Props) => {
  useEffect(() => {
    console.log('ProductList Component - products:', products)
  }, [products])

  return (
    <div>
      <List>
        {products?.map((menuItem) => (
          <ProductCard
            key={menuItem.id}
            foto={menuItem.foto}
            nome={menuItem.nome}
            descricao={menuItem.descricao}
            id={menuItem.id}
            preco={menuItem.preco?.toString()}
            porcao={menuItem.porcao}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList
