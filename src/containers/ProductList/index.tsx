import { Product } from '../../pages/Home'
import { List } from './styles'
import ProductCard from '../ProductCard'

export type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <List>
        {products.map((products) => (
          <ProductCard
            key={products.id}
            image={products.capa}
            title={products.titulo}
            description={products.descricao}
            id={products.id}
          />
        ))}
      </List>
    </div>
  )
}
export default ProductList
