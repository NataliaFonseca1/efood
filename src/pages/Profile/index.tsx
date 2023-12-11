import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../containers/ProductList'
import { useParams } from 'react-router-dom'
import BannerProfile from '../../components/BannerProfile'
import { Product } from '../Home'

export type Props = {
  products: Product[]
}

const Profile = () => {
  const { id } = useParams()
  const [productList, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()

        if (data.cardapio) {
          setProducts(data.cardapio)
        } else {
          console.error('Data structure is incorrect:', data)
        }
      } catch (error) {
        console.error('Error fetching restaurant:', error)
      }
    }

    fetchData()
  }, [id])

  useEffect(() => {
    console.log(productList)
  }, [productList])

  return (
    <div className="container">
      <HeaderProfile />
      <BannerProfile />
      <ProductList products={productList} />
      <Footer />
    </div>
  )
}

export default Profile
