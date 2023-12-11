import CategoryList from '../../containers/CategoryList'
import HeaderHome from '../../components/HeaderHome'

import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { MenuItem } from '../../containers/ProductList'

export type Product = {
  id: number
  titulo: string
  tipo?: string
  destacado?: string
  avaliacao?: string
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const [categoriesList, setCategories] = useState<Product[]>([])
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setCategories(res))
    console.log(categoriesList)
  }, [categoriesList])
  return (
    <div className="container">
      <HeaderHome />
      <CategoryList categories={categoriesList} />
      <Footer />
    </div>
  )
}
export default Home
