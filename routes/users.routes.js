const { Router } = require('express')
const router = Router()
const getUsers = require('../services/users.services')
const getAlbums = require('../services/albums.services')
router.get('/', async (req, res) => {
  try {
    
    const promise = await getUsers()
    const result = await Promise.all(promise)

    res.json(result)
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params
      
      const promise = await getAlbums(id)
      const result = await Promise.all(promise)
      res.json(result)
    } catch (err) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router
