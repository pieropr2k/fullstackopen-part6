import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

// Ex. 6.9
const store = configureStore({reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
}})
// Para ver el store cada vez que se actualiza

/*
anecdoteService.getAll().then(anecdotes =>
    store.dispatch(setAnecdote(anecdotes))
)
*/

export default store;