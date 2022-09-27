const express = require('express')

const db = require('../db/produce')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.readProduce()
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// Get a single produce item by id
router.get('/:id', async (req, res) => {
  try {
    const result = await db.readOneProduce(parseInt(req.params.id))
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const response = await db.createProduce(req.body)
    const newProduce = await db.readOneProduce(response)
    res.json(newProduce)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.updateProduce(req.body, parseInt(req.params.id))
    const updatedResp = await db.readOneProduce(parseInt(req.params.id))
    res.json(updatedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const produceDeletedResp = await db.deleteProduce(parseInt(req.params.id))
    res.json(produceDeletedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//FAVOURITE FUNCTIONALITIES
router.post('/favourites', async (req, res) => {
  console.log(
    'req.body on the /produce/favourites route is',
    req.body.auth0_id,
    req.body.recipe
  )
  const auth0Id = req.body.auth0_id
  const recipe = req.body.recipe

  console.log('favourite router auth0: ', auth0Id)

  try {
    const favouriteResp = await db.createFavourite(recipe, auth0Id)
    console.log('favourite resp Router: ', favouriteResp)
    res.json(favouriteResp)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
