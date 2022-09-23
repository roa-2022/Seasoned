/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produce_available_months').del()
  // January
  await knex('produce_available_months').insert([
    { id: 1, month: 1, produce_id: 1 },
    { id: 2, month: 1, produce_id: 2 },
    { id: 3, month: 1, produce_id: 3 },
  ])
}
