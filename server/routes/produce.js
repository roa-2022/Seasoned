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

router.post('/', async (req, res) => {
  const produceData = req.body
  
  {
		"id": 2,
		"name": "apricot",
		"display_name": "Apricot/Aperekoti",
		"type": "fruit",
		"image": "https://www.5aday.co.nz/media/14967/apricot.jpg?&width=800&height=400&anchor=top&mode=crop"
	}
})

module.exports = router
