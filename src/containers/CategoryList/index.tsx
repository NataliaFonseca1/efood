import CategoryProduct from '../CategoryProduct'

import { List } from './styles'

export type Props = {
  categories: Product[]
}

const CategoryList = ({ categories }: Props) => {
  return (
    <List>
      {categories.map((CategoriesProducts) => (
        <CategoryProduct
          key={CategoriesProducts.id}
          id={CategoriesProducts.id}
          image={CategoriesProducts.capa}
          tipo={CategoriesProducts.tipo || ''}
          destacado={CategoriesProducts.destacado || ''}
          title={CategoriesProducts.titulo}
          description={CategoriesProducts.descricao}
          classification={CategoriesProducts.avaliacao || ''}
        />
      ))}
    </List>
  )
}
export default CategoryList
