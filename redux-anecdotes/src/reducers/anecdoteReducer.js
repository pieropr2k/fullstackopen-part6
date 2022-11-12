import { createSlice } from '@reduxjs/toolkit'

// Exercise 6.10
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  // Exercise 6.13
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      // Exercise 6.14
      state.push(action.payload)
    },
    increaseAnecdoteVotes(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(note =>
        note.id !== id ? note : changedAnecdote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    // Exercise 6.13
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

export const {createAnecdote, increaseAnecdoteVotes, appendAnecdote, setAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer