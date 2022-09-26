exports.up = (knex) => {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.json('recipe')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('favourites')
}
