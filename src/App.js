import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Player from './Player'

const App = () => {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  )
}

export default App
