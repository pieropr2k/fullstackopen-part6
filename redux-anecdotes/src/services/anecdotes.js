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
  const response = await axios.post(baseUrl, object)
  return response.data
}

// Exercise 6.17
const updateVotes = async (id) => {
  const preResponse = await axios.get(`${baseUrl}/${id}`)
  const response = await axios.put(`${baseUrl}/${id}`, {...preResponse.data, votes: preResponse.data.votes + 1})
  return response.data
}

const anecdoteService = { getAll, createNew, updateVotes }

export default anecdoteService