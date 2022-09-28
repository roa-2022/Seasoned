// TODO: write working tests for the users API

// import nock from 'nock'
// import { getUser, addUser } from '../../apis/users'

// it('Can add a user', async () => {
//   const userObject = {
//     auth0_id: 'auth0|111111111',
//     username: 'test',
//     token: 'testToken',
//   }
//   const scope = nock('https://localhost:3000')
//     .get(`/api/v1/users`)
//     .reply(200, userObject)

//   const dispatch = jest.fn()

//   return getUser('testUser')(dispatch).then(() => {
//     expect(dispatch.mock.calls[0][0].type).toBe('CLEAR_LOGGED_IN_USER')
//     expect(dispatch.mock.calls[1][0].type).toBe('UPDATE_LOGGED_IN_USER')
//     expect(dispatch.mock.calls[1][0].payload.token).toBe('testToken')

//     scope.done()
//   })
// })

// it('Can get a user', async () => {
//   const userObject = {
//     auth0_id: 'auth0|111111111',
//     username: 'test',
//     token: 'testToken',
//   }
//   const scope = nock('https://localhost:3000')
//     .get(`/api/v1/users`)
//     .reply(200, userObject)

//   const dispatch = jest.fn()

//   return getUser('testUser')(dispatch).then(() => {
//     expect(dispatch.mock.calls[0][0].type).toBe('CLEAR_LOGGED_IN_USER')
//     expect(dispatch.mock.calls[1][0].type).toBe('UPDATE_LOGGED_IN_USER')
//     expect(dispatch.mock.calls[1][0].payload.token).toBe('testToken')

//     scope.done()
//   })
// })
