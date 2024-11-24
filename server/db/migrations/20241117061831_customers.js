/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('Customers', (table) => {
    table.string('id').primary()
    table.string('name')
    table.string('email').notNullable()
    table.string('phone_number')
    table.string('address')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Add export const down & add 'dropTable'
export const down = function (knex) {
  return knex.schema.dropTable('Customers')
}
