exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          auth0_id: 'auth0|123456789',
          username: 'johndoe',
          created_at: new Date(),
          updated_at: new Date(),
          email: 'john@doe.com',
          image:
            'https://www.gravatar.com/avatar/639bae9ac6b3e1a84cebb7b403297b79?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|987654321',
          username: 'janedoe',
          created_at: new Date(),
          updated_at: new Date(),
          email: 'jane@doe.com',
          image:
            'https://www.gravatar.com/avatar/128b6697ec11075134e554b0d6e098bd?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|567891234',
          username: 'johnsmith',
          created_at: new Date(),
          updated_at: new Date(),
          email: 'john@smith.com',
          image:
            'https://www.gravatar.com/avatar/e877c56e4fb621e81fd30dbd114a545b?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|984321765',
          username: 'janesmith',
          created_at: new Date(),
          updated_at: new Date(),
          email: 'jane@smith.com',
          image:
            'https://www.gravatar.com/avatar/0cc175b9c0f1b6a831c399e269772661?d=retro&f=y',
        },
      ])
    })
}
