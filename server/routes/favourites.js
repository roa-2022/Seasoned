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
  try {
    const favouriteResp = await db.createFavourite(req.body)
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
