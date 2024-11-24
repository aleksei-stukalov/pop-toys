import { Product } from './products'

export interface OrderData {
  created_at: string
  customer_email: string
  products: Product[]
}

export interface Order extends OrderData {
  id: number
}
