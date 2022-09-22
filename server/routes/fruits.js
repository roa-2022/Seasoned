const express = require('express')

const db = require('../db/fruits')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.readFruits()
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
