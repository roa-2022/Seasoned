exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('username')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('name')
    table.string('email')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
