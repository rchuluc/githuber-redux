/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {View, Text, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import store from './store'

import Routes from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Provider>
  )
}

export default App
