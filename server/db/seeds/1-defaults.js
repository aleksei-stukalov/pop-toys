/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('Order_Product').del()
  await knex('Products').del()
  await knex('Orders').del()
  await knex('Categories').del()
  await knex('Customers').del()

  await knex('Categories').insert([
    { id: 'toys', name: 'Toys' },
    { id: 'blind-bags', name: 'Blind bags' },
  ])
}
