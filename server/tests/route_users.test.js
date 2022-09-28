// const request = require('supertest')
// const server = require('../server')
// const db = require('../db/users')

// jest.mock('../db/users', () => {
//   return {
//     getUser: jest.fn(),
//     createUser: jest.fn(),
//   }
// })

// // TEST getUser function
// describe('GET /api/v1/users', () => {
//   test('return the specific user if the db promise resolves', () => {
//     const fakeResult = {
//       auth0_id: 'auth0|123456789',
//       username: 'johndoe',
//       created_at: 1664333866923,
//       updated_at: 1664333866923,
//       email: 'john@doe.com',
//       image:
//         'https://www.gravatar.com/avatar/639bae9ac6b3e1a84cebb7b403297b79?d=retro&f=y',
//     }

//     const expected = {
//       auth0_id: 'auth0|987654321',
//       username: 'janedoe',
//       created_at: 1664333866923,
//       updated_at: 1664333866923,
//       email: 'jane@doe.com',
//       image:
//         'https://www.gravatar.com/avatar/128b6697ec11075134e554b0d6e098bd?d=retro&f=y',
//     }

//     db.getUser.mockImplementation(() => {
//       return Promise.resolve(fakeResult)
//     })

//     return request(server)
//       .get('/api/v1/users')
//       .then((resp) => {
//         expect(db.getUser).toHaveBeenCalled()

//         expect(resp.body).not.toEqual({})
//         expect(resp.body).toEqual(expected)
//       })
//   })

//   it('throws an appropriate error if the db promise is rejected', () => {
//     db.getUser.mockImplementation(() => {
//       return Promise.reject(new Error('Produce Database Error'))
//     })

//     return request(server)
//       .get('/api/v1/users')
//       .then((resp) => {
//         expect(db.getUser).toHaveBeenCalled()

//         expect(resp.status).toBe(500)
//         expect(resp.text).toContain('Produce Database Error')
//       })
//   })
// })

// // TEST createUser function
// describe('POST /api/v1/favourites', () => {
//   test('returns the recently created recipe', () => {
//     const fakeProduce = {
//       auth0_id: 'google-oauth2|987654321',
//       rating: 5,
//       done: 1,
//       url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
//       label: 'Baked Potato Snack',
//     }

//     const fakeResult = '3'

//     db.createFavourite.mockImplementation(() => {
//       return Promise.resolve('3')
//     })

//     db.readOneFavourite.mockImplementation(() => {
//       return Promise.resolve(fakeResult)
//     })

//     return request(server)
//       .post('/api/v1/favourites')
//       .send(fakeProduce)
//       .then((req) => {
//         expect(db.createFavourite).toHaveBeenCalledWith(fakeProduce)

//         expect(req.body).not.toEqual({})
//         expect(req.body).toEqual(fakeResult)
//       })
//   })

//   it('throws an appropriate error if the db promise is rejected', () => {
//     db.createFavourite.mockImplementation(() => {
//       return Promise.reject(new Error('Produce Database Error'))
//     })

//     return request(server)
//       .get('/api/v1/favourites')
//       .then((resp) => {
//         expect(db.createFavourite).toHaveBeenCalled()

//         expect(resp.status).toBe(500)
//         expect(resp.text).toContain('Produce Database Error')
//       })
//   })
// })

// test.todo('POST /api/v1/games')
