import { createSlice } from '@reduxjs/toolkit'

// Exercise 6.11
const anecdoteSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotificationMessage(state, action) {
      const content = action.payload
      state = content
      return state
    },
    removeNotificationMessage(state) {
      state = null
      return state
    }
  }
})

export default anecdoteSlice