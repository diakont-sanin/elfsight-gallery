const fetch = require('node-fetch')

const apiUrl = 'https://jsonplaceholder.typicode.com/albums/'
const fetchPhoto = async (item) => {
  const res = await fetch(`${apiUrl}${item}/photos`)
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiUrl}${item} received ${res.status}`)
  }
  return await res.json()
}

const getPhoto = async (item) => {
  const photo = await fetchPhoto(item)
  return photo
}
module.exports = getPhoto
