import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../containers/ProductList'
import { useParams } from 'react-router-dom'
import BannerProfile from '../../components/BannerProfile'

import { useGetProductsQuery } from '../../services/api'
import Loader from '../../components/Loaders'

type ProductsPrams = {
  id: string
}
const Profile = () => {
  const { id } = useParams() as ProductsPrams

  const { data: productList } = useGetProductsQuery(id)

  if (!productList) {
    return <Loader />
  }

  /* const [productList, setProducts] = useState<Product[]>([])

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
*/
  return (
    <>
      <HeaderProfile />
      <BannerProfile />
      <div className="container">
        <ProductList itens={productList?.cardapio} />
      </div>
    </>
  )
}

export default Profile
