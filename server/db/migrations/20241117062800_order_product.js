/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('Order_Product', (table) => {
    table.integer('id').primary()
    table.integer('order_id').references('Orders.id').notNullable()
    table.string('product_id').references('Products.id').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Add export const down & add 'dropTable'
export const down = function (knex) {
  return knex.schema.dropTable('Order_Product')
}
