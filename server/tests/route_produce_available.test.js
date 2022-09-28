const request = require('supertest')
const server = require('../server')
const db = require('../db/produce_available_months')

jest.mock('../db/produce_available_months', () => {
  return {
    readAllAvailable: jest.fn(),
    readOneAvailability: jest.fn(),
    createAvailability: jest.fn(),
  }
})

// TEST readAvailable function
describe('GET /api/v1/available', () => {
  test('return all the available products if the db promise resolves', () => {
    const fakeResult = [
      { id: 1, month: 1, produce_id: 2 },
      { id: 2, month: 1, produce_id: 3 },
    ]

    const expected = { id: 2, month: 1, produce_id: 3 }

    db.readAllAvailable.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/available')
      .then((resp) => {
        expect(db.readAllAvailable).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toHaveLength(2)
        expect(resp.body[1]).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readAllAvailable.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/available')
      .then((resp) => {
        expect(db.readAllAvailable).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST readOneAvailability function
describe('GET /api/v1/available/1', () => {
  test('returns the correct specific available product for that month', () => {
    const fakeResult = {
      id: 1,
      name: 'apple',
      display_name: 'Apple/Āporo',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
    }

    const expected = {
      id: 1,
      name: 'apple',
      display_name: 'Apple/Āporo',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
    }

    db.readOneAvailability.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/available/1')
      .then((resp) => {
        expect(db.readOneAvailability).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readOneAvailability.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/available/1')
      .then((resp) => {
        expect(db.readOneAvailability).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST createAvailability function
describe('POST /api/v1/available', () => {
  test('returns the recently created available product for specific month', () => {
    const fakeProduce = { month: 1, produce_id: 2 }

    const fakeResult = { id: 317, month: 1, produce_id: 2 }

    db.createAvailability.mockImplementation(() => {
      return Promise.resolve('317')
    })

    db.readOneAvailability.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .post('/api/v1/available')
      .send(fakeProduce)
      .then((req) => {
        expect(db.createAvailability).toHaveBeenCalledWith(fakeProduce)

        expect(req.body).not.toEqual({})
        expect(req.body).toEqual(fakeResult)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.createAvailability.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/available')
      .then((resp) => {
        expect(db.createAvailability).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

test.todo('POST /api/v1/games')
