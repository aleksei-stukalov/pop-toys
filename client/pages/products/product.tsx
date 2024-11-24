import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductById } from '@hooks/use-data'
import { useAddToBasket, useBasket } from '@hooks/use-basket'

export default function Page() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useProductById(id || '')
  const basket = useBasket()
  const addToBasket = useAddToBasket()
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    if (!data) return
    if (basket.some((item) => item.id === data.id)) setAvailable(false)
  }, [basket, data])

  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>Error: {error?.message}</div>

  return (
    <>
      <nav className="mt-4">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        {' > '}
        <Link className="hover:underline" to="/products">
          All Products
        </Link>
        {' > '}
        <Link
          className="hover:underline"
          to={'/categories/' + data.category_id}
        >
          {data.category_name}
        </Link>
      </nav>

      <div className="relative mt-2 flex gap-8 flex-col lg:flex-row">
        <img
          src={`/images/${data.image_name}`}
          alt={data.name}
          className="aspect-square object-contain w-full lg:w-7/12 rounded-md bg-white"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{data.name}</h1>
          <p className="text-sm">{data.category_name}</p>
          <p className="mt-8">{data.description}</p>
          <p className="text-2xl font-semibold mt-4">
            ${data.cost.toString().slice(0, -2)}.
            {data.cost.toString().slice(-2)}
          </p>
          <button
            disabled={!available}
            onClick={() => addToBasket(data)}
            className={
              'w-full mt-8  text-slate-50 px-2 py-1 rounded-[6px]' +
              (available
                ? ' bg-green-700 hover:bg-green-800'
                : '  bg-slate-600')
            }
          >
            {available ? 'Add to Basket' : 'Added'}
          </button>
        </div>
      </div>
    </>
  )
}
