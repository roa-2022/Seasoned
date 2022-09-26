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
    const result = await db.readOneProduce(req.params.id)
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
    const response = await db.updateProduce(req.body, req.params.id)
    const updatedResp = await db.readOneProduce(req.params.id)
    res.json(updatedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const produceDeletedResp = await db.deleteProduce(req.params.id)
    res.json(produceDeletedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//FAVOURITE FUNCTIONALITIES
router.post('/:id/favourites', async (req, res) => {
  const id = req.params.id
  const auth0Id = req.body.auth0_id

  console.log('favourite router auth0: ', auth0Id)

  try {
    const favouriteClickResp = await db.readOneProduce(id)
    const favouriteResp = await db.createFavourite(favouriteClickResp, auth0Id)
    console.log('favourite resp Router: ', favouriteResp)
    res.json(favouriteResp)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
