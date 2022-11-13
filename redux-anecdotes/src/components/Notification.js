import { connect } from "react-redux"

const Notification = ({notification}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  // render here notification...
  return notification ? (
    <div style={style}>
      {notification}
    </div>
  ) : null
}

// Exercise 6.19
const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification