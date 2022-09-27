// TODO: write working tests for the Edamam API

import nock from 'nock'

import { getRecipes } from '../../apis/recipes'

test('getRecipes', () => {
  const expectedRecipe = { hits: [{ recipe: { label: 'Chicken' } }] }

  const scope = nock('https://api.edamam.com')
    .get(
      `/search?q=chicken&app_id=eeb6d9e0&app_key=${process.env.KEY}&from=0&to=6`
    )
    .reply(200, expectedRecipe)

  const dispatch = jest.fn()

  return getRecipes('chicken')(dispatch).then(() => {
    expect(dispatch.mock.calls[0][0].type).toBe('LOADING')
    expect(dispatch.mock.calls[1][0].type).toBe('STOP_LOADING')
    expect(dispatch.mock.calls[1][0].payload.hits[0].recipe.label).toBe(
      'Chicken'
    )

    scope.done()
  })
})
