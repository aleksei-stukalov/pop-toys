/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('Orders', (table) => {
    table.integer('id').primary()
    table.string('created_at').notNullable()
    table.string('customer_id').references('Customers.id').notNullable()
    table.integer('total_cost').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Add export const down & add 'dropTable'
export const down = function (knex) {
  return knex.schema.dropTable('Orders')
}
