import { useContext } from 'react'
import { BasketContext } from '@context/basket-context'
import { Product } from '@models/products'

export function useBasket() {
  const { basket } = useContext(BasketContext)
  return basket
}

export function useAddToBasket() {
  const { basket, setBasket } = useContext(BasketContext)

  return (data: Product) => {
    setBasket([...basket, data])
  }
}

export function useSetBasket() {
  const { setBasket } = useContext(BasketContext)
  return setBasket
}
