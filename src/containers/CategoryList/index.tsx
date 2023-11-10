import CategoriesProducts from '../../models/categories'
import CategoryProduct from '../CategoryProduct'

import { List } from './styles'

export type Props = {
  categories: CategoriesProducts[]
}

const CategoryList = ({ categories }: Props) => {
  return (
    <div>
      <List>
        {categories.map((CategoriesProducts) => (
          <CategoryProduct
            key={CategoriesProducts.id}
            image={CategoriesProducts.image}
            info={CategoriesProducts.info}
            title={CategoriesProducts.title}
            description={CategoriesProducts.description}
            classification={CategoriesProducts.classification}
          />
        ))}
      </List>
    </div>
  )
}
export default CategoryList
