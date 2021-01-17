import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to='/streams/new'>
            <button>Create Stream</button>
          </Link>
        </div>
      )
    }
  }

  // login userが作成したレコードにのみ表示する内容
  renderAdmin(stream) {
    if (
      stream.userId === this.props.currentUserId?.trim() &&
      this.props.currentUserId
    ) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id}>
          <i></i>
          <div>Title:{stream.title}</div>
          <div>Description:{stream.description}</div>
          {this.renderAdmin(stream)}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>{this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
