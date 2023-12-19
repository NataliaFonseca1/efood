import { List } from './styles'
import ProductCard from '../ProductCard'
import { Item } from '../../pages/Home'

export type Props = {
  itens: Item[]
}

const ProductList = ({ itens }: Props) => {
  console.log('produtos', itens)
  return (
    <div>
      <List>
        {itens.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </List>
    </div>
  )
}

export default ProductList
