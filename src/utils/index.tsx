export const priceFormatter = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
export const getTotalPrice = (items: Item[]) => {
  return items.reduce((accumulator, currentPrice) => {
    if (currentPrice.preco) {
      return (accumulator += currentPrice.preco)
    }
    return 0
  }, 0)
}
