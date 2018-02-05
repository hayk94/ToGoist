import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './configs/materialUi'
import Reboot from 'material-ui/Reboot'

import './configs'

import AppBar from './components/AppBar'
import Main from './components/Main'

const App = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <Reboot />
          <AppBar />
          <Route path="/" component={Main} />
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
