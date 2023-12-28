declare interface Product {
  id: number
  titulo: string
  tipo?: string
  destacado?: string
  avaliacao?: string
  descricao: string
  capa: string
  cardapio: Item[]
}
declare type Item = {
  id: number
  foto?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
}
