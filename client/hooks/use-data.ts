import request from 'superagent'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { Product } from '@models/products'
import { Order } from '@models/orders'

export function useAllProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const result = await request.get('/api/v1/products')
      return result.body as Product[]
    },
  })
}

export function useProductById(id: string) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const result = await request.get(`/api/v1/products/${id}`)
      return result.body as Product
    },
  })
}

export function useAllCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const result = await request.get('/api/v1/categories')
      return result.body as Product[]
    },
  })
}

export function useAllProductsByCategoryId(id: string) {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: async () => {
      const result = await request.get(`/api/v1/categories/${id}`)
      return result.body as Product[]
    },
  })
}

export function useAllOrders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const result = await request.get('/api/v1/user/orders')
      return result.body as Order[]
    },
  })
}

export function useCreateOrder() {
  const queryClient = useQueryClient()
  const { user, getAccessTokenSilently } = useAuth0()

  return useMutation({
    mutationFn: async (products: Product[]) => {
      const token = await getAccessTokenSilently()

      const result = await request
        .post('/api/v1/user/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({
          created_at: new Date().toISOString(),
          customer_email: user?.email,
          products,
        })

      return result.body as Order
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    },
  })
}
