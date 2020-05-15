const express = require('express')

const path = require('path')

const app = express()
app.use(express.json({ extended: true }))

app.use('/api/users', require('./routes/users.routes'))
app.use('/api/photos', require('./routes/photos.routes'))
app.use('/api/detail', require('./routes/detail.routes'))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (error) {
    console.log('Server error', error.message)
    process.exit(1)
  }
}
start()
