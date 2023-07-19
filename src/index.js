import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { store } from './cmps/store/store'
import RootCmp from './root-cmp.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Router>
      <RootCmp />
    </Router>
  </Provider>,



)
