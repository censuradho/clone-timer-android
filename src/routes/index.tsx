import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Timer from '../screen/Timer'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

function Routes (props: any) {
  return (
    <BrowserRouter>
      <Header title="Timer" />
      <Switch>
        <Route component={Timer} />
      </Switch>
      <Navigation />
    </BrowserRouter>
  )
}

export default Routes
