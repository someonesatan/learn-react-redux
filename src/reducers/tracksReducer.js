const initialState = []

let tracksReducer = (state = initialState, action) => {
  if ( action.type === 'ADD_TRACK' ) {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

export default tracksReducer
