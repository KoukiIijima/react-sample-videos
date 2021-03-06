import React from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamShow extends React.Component {
  constructor(props) {
    super(props)

    this.videoref = React.createRef()
  }

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.fetchStream(id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  componentWillUnmount() {
      // ここで消さないとplayer自体は動作したままになる
      this.player.destroy()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return
    }

    const { id } = this.props.match.params
    console.log(this.videoref.current)

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    })
    this.player.attachMediaElement(this.videoref.current)
    this.player.load()
    this.player.play()
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    const { title, description } = this.props.stream

    return (
      <div>
        <video ref={this.videoref} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
