const express = require('express')

const db = require('../db/produce_available_months')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.readAllAvailable()
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await db.readOneAvailability(req.params.id)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const response = await db.createAvailability(req.body)
    const newAvailability = await db.readOneAvailability(response)
    res.json(newAvailability)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.updateAvailability(req.body, req.params.id)
    const updatedResp = await db.readOneAvailability(req.params.id)
    res.json(updatedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const availabilityDeletedResp = await db.deleteAvailability(req.params.id)
    res.json(availabilityDeletedResp)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/month/:month', async (req, res) => {
  try {
    const result = await db.readAvailabilityForMonth(req.params.month)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/produce/:produce_id', async (req, res) => {
  try {
    const result = await db.readAvailabilityForProduceId(req.params.produce_id)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/season/:season', async (req, res) => {
  try {
    const result = await db.readAvailabilityBySeason(req.params.season)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
