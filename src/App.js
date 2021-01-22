import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from './routes'
import Navbars from './components/Navbar'

export default function App () {
  return (
    <Router>
      <Navbars />
      <main>
        <Switch>{routes}</Switch>
      </main>
    </Router>
  )
}
