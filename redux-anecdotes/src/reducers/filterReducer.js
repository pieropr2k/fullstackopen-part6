import { createSlice } from '@reduxjs/toolkit'

// Exercise 6.12
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilteredWord(state, action) {
      const content = action.payload
      state = content
      return state
    }
  }
})

export default filterSlice