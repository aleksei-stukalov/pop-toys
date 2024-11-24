import express from 'express'
import * as db from '../db/db'

const router = express.Router()
export default router

// api/v1/products
// Returns all products
router.get('/products', async (req, res) => {
  try {
    const result = await db.getAllProducts()
    res.json(result)
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
    else console.error('Unknown Error')
    res.sendStatus(500)
  }
})

// api/v1/products/:id
// Returns a product by id
router.get('/products/:id', async (req, res) => {
  const id = req.params.id

  try {
    const result = await db.getProductById(id)
    res.json(result)
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
    else console.error('Unknown Error')
    res.sendStatus(500)
  }
})

// api/v1/categories
// Returns all categories
router.get('/categories/', async (req, res) => {
  try {
    const result = await db.getAllCategories()
    res.json(result)
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
    else console.error('Unknown Error')
    res.sendStatus(500)
  }
})

// api/v1/categories/:id
// Returns all products in a category
router.get('/categories/:id', async (req, res) => {
  const id = req.params.id

  try {
    const result = await db.getProductsByCategoryId(id)
    res.json(result)
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
    else console.error('Unknown Error')
    res.sendStatus(500)
  }
})
