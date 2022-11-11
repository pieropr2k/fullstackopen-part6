import { useSelector, useDispatch } from 'react-redux'

const Anecdote = ({ anecdote }) => {
  // The useDispatch-hook provides any React component access 
  // to the dispatch-function of the redux-store defined in index.js. 
  // This allows all components to make changes to the state of the redux-store
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({ type: 'anecdotes/increaseAnecdoteVotes', payload: id })

    // Exercise 6.11
    dispatch({ type: 'notification/setNotificationMessage', payload: `you voted '${anecdote.content}'`})
    setTimeout(() => {
      dispatch({ type: 'notification/removeNotificationMessage'})
    }, '5000')
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
  const anecdotes = useSelector(
    state => [...state.anecdotes]
      .sort((a, b) => b.votes - a.votes)
      // Exercise 6.12
      .filter((value) =>value.content.toLowerCase().includes(state.filter.toLowerCase()))
  )
  //console.log(anecdotes)
  return (
    <>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </>
  )
}

export default AnecdoteList