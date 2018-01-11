const initialState = []

let tracksReducer = (state = initialState, action) => {
  if ( action.type === 'ADD_TRACK' ) {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'FIND_TRACK') {
    return state
  } else if (action.type === 'DELETE_TRACK') {
    return state
  }
  return state
}

export default tracksReducer
