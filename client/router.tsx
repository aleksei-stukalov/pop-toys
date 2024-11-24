import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from './Layout'
import Admin from './admin/Admin'
import Products from './pages/products/'
import Product from './pages/products/product'
import Categories from './pages/categories/'
import Category from './pages/categories/category'
import Orders from './pages/orders/'
import Order from './pages/orders/order'
import Basket from './pages/basket'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<Category />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<Order />} />
        <Route path="basket" element={<Basket />} />
      </Route>
      <Route path="admin" element={<Admin />} />
    </>,
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
    },
  },
)
