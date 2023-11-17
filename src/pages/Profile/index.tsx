import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../containers/ProductList'
import { Product } from '../Home'
import { useParams } from 'react-router-dom'

export type Props = {
  id: number
  products: Product[]
}
const Profile = () => {
  const { id } = useParams()
  const [productList, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])
  return (
    <div className="container">
      <HeaderProfile />
      <ProductList products={productList} />
      <Footer />
    </div>
  )
}
export default Profile
