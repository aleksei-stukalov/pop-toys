import { useBasket, useSetBasket } from '@hooks/use-basket'
import { useCreateOrder } from '@hooks/use-data'
import { Product } from '@models/products'
import { useEffect } from 'react'

export default function Page() {
  const basket = useBasket()
  const setBasket = useSetBasket()
  const { mutate: createOrder, data: order } = useCreateOrder()

  const handleOrder = async () => {
    if (!basket) return
    createOrder(basket)
  }

  useEffect(() => {
    if (!order) return
    setBasket([])
  }, [order, setBasket])

  return (
    <div className="flex flex-col gap-2">
      {basket.map((product: Product) => (
        <ProductRow key={product.id} product={product} />
      ))}
      <button
      hidden={!basket.length}
        onClick={handleOrder}
        className="self-end bg-green-700 hover:bg-green-800 text-slate-50 px-4 py-2 rounded-md"
      >
        Checkout
      </button>
    </div>
  )
}

function ProductRow({ product }: { product: Product }) {
  const basket = useBasket()
  const setBasket = useSetBasket()

  function handleRemove() {
    const data = basket?.filter((products) => products.id !== product.id) || []
    setBasket(data)
  }

  return (
    <div className="bg-slate-300 rounded-md flex items-center gap-6 py-4 px-2">
      <img
        src={`/images/${product.image_name}`}
        alt={product.name}
        className="aspect-square object-contain bg-white h-10"
      />
      <div>{product.name}</div>
      <div>{product.category_name}</div>
      <div>
        ${product.cost.toString().slice(0, -2)}.
        {product.cost.toString().slice(-2)}
      </div>

      <button
        onClick={handleRemove}
        className="ml-auto bg-red-700 hover:bg-red-800 text-slate-50 px-2 py-1 rounded-md"
      >
        Remove
      </button>
    </div>
  )
}
