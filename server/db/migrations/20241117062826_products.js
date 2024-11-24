/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('Products', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.string('image_name').notNullable()
    table.integer('cost').notNullable()
    table.integer('stock').notNullable()
    table.string('category_id').references('Categories.id').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Add export const down & add 'dropTable'
export const down = function (knex) {
  return knex.schema.dropTable('Products')
}
