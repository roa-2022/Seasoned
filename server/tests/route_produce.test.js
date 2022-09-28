const request = require('supertest')
const server = require('../server')
const db = require('../db/produce')

jest.mock('../db/produce', () => {
  return {
    readProduce: jest.fn(),
    readOneProduce: jest.fn(),
    createProduce: jest.fn(),
  }
})

// TEST readProduce function
describe('GET /api/v1/produce', () => {
  test('return all the products if the db promise resolves', () => {
    const fakeResult = [
      {
        id: 1,
        name: 'apple',
        display_name: 'Apple/Āporo',
        type: 'fruit',
        image_url:
          'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
      },
      {
        id: 2,
        name: 'apricot',
        display_name: 'Apricot/Aperekoti',
        type: 'fruit',
        image_url:
          'https://www.5aday.co.nz/media/14967/apricot.jpg?&width=800&height=400&anchor=top&mode=crop',
      },
    ]

    const expected = {
      id: 2,
      name: 'apricot',
      display_name: 'Apricot/Aperekoti',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/14967/apricot.jpg?&width=800&height=400&anchor=top&mode=crop',
    }

    db.readProduce.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/produce')
      .then((resp) => {
        expect(db.readProduce).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toHaveLength(2)

        expect(resp.body[1]).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readProduce.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/produce')
      .then((resp) => {
        expect(db.readProduce).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST readOneProduce function
describe('GET /api/v1/produce/1', () => {
  test('returns the correct specific recipe', () => {
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

    db.readOneProduce.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/produce/1')
      .then((resp) => {
        expect(db.readOneProduce).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.readOneProduce.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/produce/1')
      .then((resp) => {
        expect(db.readOneProduce).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

// TEST createProduce function
describe('POST /api/v1/produce', () => {
  test('returns the recently created recipe', () => {
    const fakeProduce = {
      name: 'apple',
      display_name: 'Apple/Āporo',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
    }

    const fakeResult = {
      id: 92,
      name: 'apple',
      display_name: 'Apple/Āporo',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
    }

    db.createProduce.mockImplementation(() => {
      return Promise.resolve('92')
    })

    db.readOneProduce.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .post('/api/v1/produce')
      .send(fakeProduce)
      .then((req) => {
        expect(db.createProduce).toHaveBeenCalledWith(fakeProduce)

        expect(req.body).not.toEqual({})
        expect(req.body).toEqual(fakeResult)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    db.createProduce.mockImplementation(() => {
      return Promise.reject(new Error('Produce Database Error'))
    })

    return request(server)
      .get('/api/v1/produce')
      .then((resp) => {
        expect(db.createProduce).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Produce Database Error')
      })
  })
})

test.todo('POST /api/v1/games')
