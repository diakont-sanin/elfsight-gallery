const fetch = require('node-fetch')

const apiUrl = 'https://jsonplaceholder.typicode.com/users/'
const fetchAlbums = async (item) => {
  const res = await fetch(`${apiUrl}${item}/albums`)
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiUrl}${item} received ${res.status}`)
  }
  return await res.json()
}

const getAlbums = async (item) => {
  const albums = await fetchAlbums(item)
  return albums
}

module.exports = getAlbums
