import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

import Chat from './pages/Chat/Chat.jsx'
import Charts from './pages/Charts/Charts.jsx'
import Login from './pages/Login/Login.jsx'
import Logout from './pages/Logout/Logout.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default
  <Switch>
    <Route
      exact path="/"
      component={ Login }
    />
    <Route
      exact path="/charts"
      component={ Charts }
    />
    <PrivateRoute
      exact path="/logout"
      component={ Logout }
    />
    <PrivateRoute
      exact path="/chat"
      component={ Chat }
    />
    <Route
      component={ NotFound }
    />
  </Switch>