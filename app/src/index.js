/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {View, Text, StatusBar} from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>Start here</Text>
      </View>
    </>
  )
}

export default App
