const express = require('express')

const db = require('../db/favourites')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.readFavourites()
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await db.readOneFavourite(parseInt(req.params.id))
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/user/:auth0_id', async (req, res) => {
  try {
    const result = await db.readUserFavourites(req.params.auth0_id)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  const auth0Id = req.body.auth0_id
  const recipe = req.body.recipe

  console.log('req.body is', req.body)

  console.log('favourite router auth0: ', auth0Id)

  try {
    const favouriteResp = await db.createFavourite(recipe, auth0Id)
    console.log('favourite resp Router: ', favouriteResp)
    res.json(favouriteResp)
  } catch (err) {
    console.log(err)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.updateFavourite(req.body, parseInt(req.params.id))
    const updatedResp = await db.readOneFavourite(parseInt(req.params.id))
    res.json(updatedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const favouriteDeletedResp = await db.deleteFavourite(
      parseInt(req.params.id)
    )
    res.json(favouriteDeletedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
