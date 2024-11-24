import { Link } from 'react-router-dom'
import { Product } from '@models/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="block bg-slate-50 rounded-md shadow-sm p-4"
    >
      <img
        src={`/images/${product.image_name}`}
        alt={product.name}
        className="aspect-square object-cover object-right"
      />
      <p className="mt-2">{product.name}</p>
      <p className="font-semibold">
        ${product.cost.toString().slice(0, -2)}.
        {product.cost.toString().slice(-2)}
      </p>
      <p className="text-sm">{product.category_name}</p>
    </Link>
  )
}
