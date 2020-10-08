import React from 'react'

import { Provider } from 'react-redux'
import initializeStore from '../store/init'

import { Routers } from './routers'
import {
  BrowserRouter as Router
} from "react-router-dom"


const App = () => {
  return (
    <Provider store={initializeStore}>
      <Router>
        
          <Routers />

      </Router>
    </Provider>
  );
}

export default App
