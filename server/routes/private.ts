import express from 'express'
import * as db from '../db/db'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()
export default router

// api/v1/orders
// Returns all orders for the authenticated user
router.get('/orders', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const orders = await db.getOrdersByCustomerId(auth0Id)
    res.json({ orders })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

// api/v1/orders
// Adds an order and returns success message with order id
router.post('/orders', checkJwt, async (req: JwtRequest, res) => {
  const { customer_email, products } = req.body
  const auth0Id = req.auth?.sub

  if (!products) return res.status(400).send('Bad request')
  if (!auth0Id) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const customer = await db.getCustomerByAuth0Id(auth0Id)
    if (!customer) await db.createCustomer(auth0Id, customer_email)

    const order = await db.createOrder(auth0Id, products)
    res.json({ order })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})
