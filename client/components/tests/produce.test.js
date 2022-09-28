// TODO: write working tests for the produce APIgit checkout

import nock from 'nock'
import { getProduce } from '../../apis/produce'

test('getProduce', () => {
  const mockApple = [
    {
      id: 1,
      name: 'apple',
      display_name: 'Apple/Āporo',
      type: 'fruit',
      image_url:
        'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
    },
  ]

  const scope = nock('https://localhost:3000')
    .get(`/api/v1/produce`)
    .reply(200, mockApple)

  const dispatch = jest.fn()

  return getProduce()(dispatch).then(() => {
    expect(dispatch.mock.calls[0][0].type).toBe('SET_PRODUCE')
    expect(dispatch.mock.calls[1][0].type).toBe('STOP_LOADING')
    expect(dispatch.mock.calls[1][0].payload[0].name).toBe('apple')

    scope.done()
  })
})
