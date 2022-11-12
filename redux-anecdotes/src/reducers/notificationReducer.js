import { createSlice } from '@reduxjs/toolkit'

// Exercise 6.11
const notificationSlice = createSlice({
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

export const {setNotificationMessage, removeNotificationMessage} = notificationSlice.actions

// Exercise 6.18
export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(setNotificationMessage(message))
    setTimeout(() => {
      dispatch(removeNotificationMessage())
    }, time*1000)
  }
}

export default notificationSlice.reducer