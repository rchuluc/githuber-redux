import React, {useState} from 'react'
import {View} from 'react-native'

import {Container, Input, Button, ButtonText, Error} from './styles'

export default Login = () => {
  const [username, setUsername] = ''

  const handleSubmit = () => {}

  return (
    <Container>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={value => setUsername(value)}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  )
}
