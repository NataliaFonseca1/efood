import CategoryList from '../../containers/CategoryList'
import HeaderHome from '../../components/HeaderHome'

export type Product = {
  id: number
  titulo: string
  tipo?: string
  destacado?: string
  avaliacao?: string
  descricao: string
  capa: string
  cardapio: Item[]
}
export type Item = {
  id: number
  foto?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
}
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: categoriesList } = useGetRestaurantsQuery()
  if (!categoriesList) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderHome />
      <div className="container">
        <CategoryList categories={categoriesList} />
      </div>
    </>
  )
}
export default Home
