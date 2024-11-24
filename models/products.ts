export interface ProductData {
  name: string
  image_name: string
  description: string
  cost: number
  stock: number
  category_id: number
  category_name: string
}

export interface Product extends ProductData {
  id: string
}
