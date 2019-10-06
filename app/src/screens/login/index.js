import React, {useState} from 'react'
import {ActivityIndicator} from 'react-native'

import {Container, Input, Button, ButtonText, Error} from './styles'
import Api from '@services/api'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as LoginActions from '@actions/login'

const Login = ({error, loading, navigation, loginRequest}) => {
  const [username, setUsername] = useState('')

  const handleSubmit = async () => {
    loginRequest(username)
  }

  return (
    <Container>
      {error && <Error>Usuário inexistente</Error>}
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={value => setUsername(value)}
      />
      <Button onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <ButtonText>Entrar</ButtonText>
        )}
      </Button>
    </Container>
  )
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
