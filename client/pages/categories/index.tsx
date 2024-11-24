import { useAllCategories } from '@hooks/use-data'

export default function Page() {
  const { data, isLoading, isError, error } = useAllCategories()

  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>Error: {error?.message}</div>

  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data.map((category) => category.name)}
    </div>
  )
}
