exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        { auth0_id: 'auth0|123', username: 'banana_llama' },
        { auth0_id: 'auth0|456', username: 'grape_gatsby' },
      ])
    )
}
