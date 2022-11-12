import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

// Exercise 6.13
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content,
    votes: 0
  }
  //{ content, important: false }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const anecdoteService = { getAll, createNew }

export default anecdoteService