import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tracksReducer from './reducers/tracksReducer'
import playlistReducer from './reducers/playlistReducer'
import filterTrackReducers from './reducers/filterTrackReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({
  tracks: tracksReducer,
  playlists: playlistReducer,
  filterTracks: filterTrackReducers
})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store
