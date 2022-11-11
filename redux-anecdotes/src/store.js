import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

// Ex. 6.9
const store = configureStore({reducer: {
    anecdotes: anecdoteReducer.reducer,
    notification: notificationReducer.reducer,
    filter: filterReducer.reducer
}})
//const store = configureStore({reducer})
// Para ver el store cada vez que se actualiza
//store.subscribe(() => console.log(store.getState()))

export default store;