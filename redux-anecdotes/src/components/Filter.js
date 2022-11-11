import { useDispatch } from "react-redux"

const Filter = () => {
  const dispatch = useDispatch()
  
  // Exercise 6.12
  const handleChange = (event) => {
    event.preventDefault()
    // input-field value is in variable event.target.value
    dispatch({ type: 'filter/setFilteredWord', payload: event.target.value })
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter