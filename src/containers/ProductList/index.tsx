import Product from '../Product'
import Products from '../../models/products'
import { List } from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <List>
        {products.map((products) => (
          <Product
            key={products.id}
            image={products.image}
            title={products.title}
            description={products.description}
          />
        ))}
      </List>
    </div>
  )
}
export default ProductList
