/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produce', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('display_name')
    table.enu('type', ['fruit', 'vegetable']).notNullable()
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('produce')
}
