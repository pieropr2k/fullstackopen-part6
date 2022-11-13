import { connect } from "react-redux"
import { setFilteredWord } from "../reducers/filterReducer"

const Filter = ({setFilteredWord}) => {
  // Exercise 6.20
  const handleChange = (event) => {
    event.preventDefault()
    // input-field value is in variable event.target.value
    setFilteredWord(event.target.value)
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

// Exercise 6.20

const mapDispatchToProps = dispatch => {
  return {
    setFilteredWord: value => {
      dispatch(setFilteredWord(value))
    }
  }
}

const ConnectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter