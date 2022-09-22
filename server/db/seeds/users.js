exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'John Doe',
          created_at: new Date(),
          updated_at: new Date(),
          username: 'johndoe',
          auth0_id: 'auth0|123456789',
          email: 'john@doe.com',
          image:
            'https://www.gravatar.com/avatar/639bae9ac6b3e1a84cebb7b403297b79?d=retro&f=y',
        },
        {
          id: 2,
          name: 'Jane Doe',
          created_at: new Date(),
          updated_at: new Date(),
          username: 'janedoe',
          auth0_id: 'auth0|987654321',
          email: 'jane@doe.com',
          image:
            'https://www.gravatar.com/avatar/128b6697ec11075134e554b0d6e098bd?d=retro&f=y',
        },
        {
          id: 3,
          name: 'John Smith',
          created_at: new Date(),
          updated_at: new Date(),
          username: 'johnsmith',
          auth0_id: 'auth0|123456789',
          email: 'john@smith.com',
          image:
            'https://www.gravatar.com/avatar/e877c56e4fb621e81fd30dbd114a545b?d=retro&f=y',
        },
        {
          id: 4,
          name: 'Jane Smith',
          created_at: new Date(),
          updated_at: new Date(),
          username: 'janesmith',
          auth0_id: 'auth0|987654321',
          email: 'jane@smith.com',
          image:
            'https://www.gravatar.com/avatar/0cc175b9c0f1b6a831c399e269772661?d=retro&f=y',
        },
      ])
    })
}
