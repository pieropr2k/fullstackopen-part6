import { useSelector, useDispatch } from 'react-redux'
import { increaseAnecdoteVotes } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
  // The useDispatch-hook provides any React component access 
  // to the dispatch-function of the redux-store defined in index.js. 
  // This allows all components to make changes to the state of the redux-store
  const dispatch = useDispatch()

  const vote = (id) => {
    //console.log('vote', id)
    dispatch(increaseAnecdoteVotes(id))
  }

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  // To use the store in the UI
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))

  return (
    <>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </>
  )
}

export default AnecdoteList