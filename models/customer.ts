export interface CustomerData {
  name: string
  email: string
  phone_number: string
  address: string
}

export interface Customer extends CustomerData {
  id: number
}
