const { Router } = require('express')
const router = Router()
const getPhoto = require('../services/photos.services')
router.get('/:id', async (req, res) => {
  try {

    const {id} = req.params
    const promise = await getPhoto(id)
    const result = await Promise.all(promise)
    
    res.json(result)
  } catch (err) {
    res.status(500).json({ message: 'Не удалось получить данные, попробуйте снова' })
  }
})

module.exports = router