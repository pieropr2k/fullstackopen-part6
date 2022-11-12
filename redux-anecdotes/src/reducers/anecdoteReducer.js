import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// Exercise 6.10
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  // Exercise 6.13
  initialState: [],
  reducers: {
    // Exercise 6.17
    increaseAnecdoteVotes(state, action){
      return state.map(note =>
        note.id !== action.payload.id ? note : action.payload
      )
    },
    appendAnecdote(state, action) {
      // Exercise 6.14
      state.push(action.payload)
    },
    // Exercise 6.13
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const {increaseAnecdoteVotes, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

// Exercise 6.15
export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

// Exercise 6.16
export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}

// Exercise 6.17
export const updateAnecdoteVotes = id => {
  return async dispatch => {
    const newNote = await anecdoteService.updateVotes(id)
    dispatch(increaseAnecdoteVotes(newNote))
  }
}

export default anecdoteSlice.reducer