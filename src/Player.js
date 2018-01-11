import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameTrackInput: '',
      findTracksInput: ''
    }
  }
  nameInputHandleChange = (e) => {
    this.setState({ nameTrackInput: e.target.value })
  }
  findInputHandleChange = (e) => {
    this.setState({ findTracksInput: e.target.value })
  }
  addTrack = () => {
    if (this.state.nameTrackInput !== '') {
      this.props.onAddTrack(this.state.nameTrackInput)
      this.setState({ nameTrackInput: '' })
    }
  }
  findTracks = () => {
    this.props.onFindTrack(this.state.findTracksInput)
  }
  render() {
    return(
      <div>
        <div>
          <input
            value={this.state.nameTrackInput}
            type='text'
            className='trackInput'
            onChange={this.nameInputHandleChange}>
          </input>
          <button
            onClick={this.addTrack}
            className='addTrack'>
            addTrack
          </button>
        </div>

        <div>
          <input
            value={this.state.findTracksInput}
            type='text'
            className='searchInput'
            onChange={this.findInputHandleChange}>
          </input>
          <button
            onClick={this.findTracks}
            className='addTrack'>
            searchTracks
          </button>
        </div>
        <ul className='list'>
          {this.props.tracks.map((track, index) => {
            return <li key={index}>{track.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({type: 'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      dispatch({type: 'FIND_TRACK', payload: name})
    }
  })
)(Player);
