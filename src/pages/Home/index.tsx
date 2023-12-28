import CategoryList from '../../containers/CategoryList'
import HeaderHome from '../../components/HeaderHome'

import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loaders'

const Home = () => {
  const { data: categoriesList } = useGetRestaurantsQuery()
  if (!categoriesList) {
    return <Loader />
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
