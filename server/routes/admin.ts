import express from 'express'
import * as db from '../db/db'

const router = express.Router()
export default router

// api/v1/admin/products
// Adds a product and returns success message with product id
router.post('/products', async (req, res) => {
  res.sendStatus(200)
})

// api/v1/admin/products/:id
// Updates a product and returns success message
router.put('/products/:id', async (req, res) => {
  res.sendStatus(200)
})

// api/v1/admin/products/:id
// Deletes a product and returns success message
router.delete('/products/:id', async (req, res) => {
  // In the future this will set the product to inactive instead of deleting
  res.sendStatus(200)
})
