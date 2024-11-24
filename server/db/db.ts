import db from './connection'
import { Product } from '@models/products'
import { Category } from '@models/categories'
import { Customer } from '@models/customer'

export async function getAllProducts() {
  const products = await db('products')
    .join('categories', 'products.category_id', 'categories.id')
    .select('products.*', 'categories.name as category_name')
  return products as Product[]
}

export async function getProductById(id: string) {
  const product = await db('products')
    .join('categories', 'products.category_id', 'categories.id')
    .select('products.*', 'categories.name as category_name')
    .where('products.id', id)
    .first()
  return product as Product
}

export async function getAllCategories() {
  const categories = await db('categories').select('id', 'name')
  return categories as Category[]
}

export async function getProductsByCategoryId(id: string) {
  const products = await db('products')
    .join('categories', 'products.category_id', 'categories.id')
    .select('products.*', 'categories.name as category_name')
    .where('category_id', id)
  return products as Category[]
}

export async function createOrder(customer_id: string, products: Product[]) {
  const order = await db('Orders')
    .insert({
      created_at: new Date(),
      customer_id,
      total_cost: 0,
    })
    .returning('*')

  products.forEach(async (product) => {
    await db('Order_Product').insert({
      order_id: order[0].id,
      product_id: product.id,
    })
  })

  return db('Orders').where('id', order[0].id).first()
}

export async function getOrdersByCustomerId(customer_id: string) {
  const orders = await db('Orders').where('customer_id', customer_id)
  return orders
}

export async function getCustomerByAuth0Id(auth0Id: string) {
  const customer = await db('customers').where('id', auth0Id).first()
  return customer as Customer
}

export async function createCustomer(auth0Id: string, email: string) {
  await db('customers').insert({ id: auth0Id, email })
}
