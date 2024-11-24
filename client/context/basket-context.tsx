import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Product } from '@models/products'

interface BasketContextType {
  basket: Product[]
  setBasket: Dispatch<SetStateAction<Product[]>>
}

interface BasketProviderProps {
  children: React.ReactNode
}

export const BasketContext = createContext<BasketContextType>({
  basket: [],
  setBasket: () => {},
})

export function BasketProvider({ children }: BasketProviderProps) {
  const [basket, setBasket] = useState<Product[]>(loadBasketFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export function useBasket() {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error('useBasketContext must be used within a BasketProvider')
  }
  return context
}

function loadBasketFromLocalStorage() {
  const savedBasket = localStorage.getItem('basket')
  return savedBasket ? JSON.parse(savedBasket) : []
}
