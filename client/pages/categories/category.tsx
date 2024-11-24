import { useParams } from 'react-router-dom'
import ProductCard from '@components/ProductCard'
import { useAllProductsByCategoryId } from '@hooks/use-data'

export default function Page() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useAllProductsByCategoryId(
    id || '',
  )

  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>Error: {error?.message}</div>

  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
