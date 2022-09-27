exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourites')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {
          id: 1,
          auth0_id: 'google-oauth2|106132930010716579030',
          rating: 5,
          done: 1,
          url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
          label: 'Baked Potato Snack',
        },
        {
          id: 2,
          auth0_id: 'google-oauth2|106132930010716579030',
          rating: 5,
          done: 1,
          url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
          label: 'Snacked Potato Baked',
        },
      ])
    })
}
