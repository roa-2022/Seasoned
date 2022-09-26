exports.up = (knex) => {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.integer('rating')
    table.boolean('done')
    table.json('recipe')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('favourites')
}
