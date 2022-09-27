exports.up = (knex) => {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.integer('rating').defaultTo(0)
    table.boolean('done').defaultTo(false)
    table.string('label')
    table.string('url')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('favourites')
}
