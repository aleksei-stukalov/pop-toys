import ProductCard from '@components/ProductCard'
import { useAllProducts } from '@hooks/use-data'

export default function Page() {
  const { data, isLoading, isError, error } = useAllProducts()

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
