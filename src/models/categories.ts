class CategoriesProducts {
  image: string
  info: string[]
  title: string
  description: string
  classification: string
  id: number

  constructor(
    image: string,
    info: string[],
    title: string,
    description: string,
    classification: string,
    id: number
  ) {
    this.image = image
    this.info = info
    this.title = title
    this.description = description
    this.classification = classification
    this.id = id
  }
}
export default CategoriesProducts
