/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('Categories', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Add export const down & add 'dropTable'
export const down = function (knex) {
  return knex.schema.dropTable('Categories')
}
