const request = require('supertest')
const server = require('../server')
const db = require('../db/favourites')

jest.mock('../db/favourites', () => {
  return {
    readFavourites: jest.fn(),
    readOneFavourite: jest.fn(),
    createFavourite: jest.fn(),
  }
})

// TEST readFavourites function
describe('GET /api/v1/favourites', () => {
  test('return all the favourites for a specific user if the db promise resolves', () => {
    const fakeResult = [
      {
        id: 1,
        auth0_id: 'google-oauth2|987654321',
        rating: 5,
        done: 1,
        url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
        label: 'Baked Potato Snack',
      },
      {
        id: 2,
        auth0_id: 'google-oauth2|123456789',
        rating: 5,
        done: 1,
        url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
        label: 'Snacked Potato Baked',
      },
    ]

    const expected = {
      id: 2,
      auth0_id: 'google-oauth2|123456789',
      rating: 5,
      done: 1,
      url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
      label: 'Snacked Potato Baked',
    }

    db.readFavourites.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/favourites')
      .then((resp) => {
        expect(db.readFavourites).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toHaveLength(2)
        expect(resp.body[1]).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readFavourites.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/favourites')
      .then((resp) => {
        expect(db.readFavourites).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST readOneFavourite function
describe('GET /api/v1/favourite/1', () => {
  test('returns the correct specific recipe', () => {
    const fakeResult = {
      id: 1,
      auth0_id: 'google-oauth2|987654321',
      rating: 5,
      done: 1,
      url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
      label: 'Baked Potato Snack',
    }

    const expected = {
      id: 1,
      auth0_id: 'google-oauth2|987654321',
      rating: 5,
      done: 1,
      url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
      label: 'Baked Potato Snack',
    }

    db.readOneFavourite.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/favourites/1')
      .then((resp) => {
        expect(db.readOneFavourite).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readOneFavourite.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/favourites/1')
      .then((resp) => {
        expect(db.readOneFavourite).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST createFavourite function
describe('POST /api/v1/favourites', () => {
  test('returns the recently created recipe', () => {
    const fakeProduce = {
      auth0_id: 'google-oauth2|987654321',
      rating: 5,
      done: 1,
      url: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc',
      label: 'Baked Potato Snack',
    }

    const fakeResult = '3'

    db.createFavourite.mockImplementation(() => {
      return Promise.resolve('3')
    })

    db.readOneFavourite.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .post('/api/v1/favourites')
      .send(fakeProduce)
      .then((req) => {
        expect(db.createFavourite).toHaveBeenCalledWith(fakeProduce)

        expect(req.body).not.toEqual({})
        expect(req.body).toEqual(fakeResult)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.createFavourite.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/favourites')
      .then((resp) => {
        expect(db.createFavourite).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

test.todo('POST /api/v1/games')
