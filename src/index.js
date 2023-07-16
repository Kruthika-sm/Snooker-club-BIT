import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TheQueClub from './views/the-que-club'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TheQueClub} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
