const fetch = require('node-fetch')

const apiUrl = 'https://jsonplaceholder.typicode.com/users'
const fetchUsers = async () => {
    const res = await fetch(apiUrl)
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${apiUrl} received ${res.status}`
      );
    }
    return await res.json();
  }
  
const getUsers = async ()=>{
    const users = await fetchUsers()
    return users
  }

module.exports = getUsers