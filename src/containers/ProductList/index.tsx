import { Product } from '../../pages/Home'
import { List } from './styles'
import ProductCard from '../ProductCard'
import { useEffect } from 'react'

export type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  useEffect(() => {
    console.log('ProductList Component - products:', products);
  }, [products]);

  return (
    <div>
      <List>
        {products?.map(
          (restaurant) =>
            restaurant.cardapio?.map((product) => (
              <ProductCard
                key={product.id}
                foto={product.foto}
                nome={product.nome}
                descricao={product.descricao}
                id={product.id}
                preco={product.preco}
                porcao={product.porcao}
              />
            ))
        )}
      </List>
    </div>
  )
}

export default ProductList
