import { createStore, combineReducers } from 'redux'
import tracksReducer from './reducers/tracksReducer'
import playlistReducer from './reducers/playlistReducer'
import filterTrackReducers from './reducers/filterTrackReducers'

const reducers = combineReducers({
  tracks: tracksReducer,
  playlists: playlistReducer,
  filterTracks: filterTrackReducers
})

const store = createStore(reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
