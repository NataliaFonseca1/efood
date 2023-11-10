import CategoryList from '../../containers/CategoryList'
import HeaderHome from '../../components/HeaderHome'

import japonese from '../../assets/images/sushi.png'
import italian from '../../assets/images/trattoria.png'

import CategoriesProducts from '../../models/categories'
import Footer from '../../components/Footer'

const categoriesList: CategoriesProducts[] = [
  {
    id: 1,
    image: japonese,
    info: ['destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    classification: '4,0'
  },
  {
    id: 2,
    image: italian,
    info: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    classification: '4,6'
  },
  {
    id: 2,
    image: italian,
    info: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    classification: '4,6'
  },
  {
    id: 2,
    image: italian,
    info: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    classification: '4,6'
  },
  {
    id: 2,
    image: italian,
    info: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    classification: '4,6'
  },
  {
    id: 2,
    image: italian,
    info: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    classification: '4,6'
  }
]

const Home = () => {
  return (
    <div className="container">
      <HeaderHome />
      <CategoryList categories={categoriesList} />
      <Footer />
    </div>
  )
}
export default Home
