import React, {useEffect} from 'react'
import {ActivityIndicator, Text} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as RepositoriesActions from '@actions/repositories'

import {Container} from './styles'

const Repositories = ({loadRepositoriesRequest, repositories}) => {
  useEffect(() => {
    loadRepositoriesRequest()
  }, [])

  const {loading, error, data} = repositories

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="small" color="#999" />
      ) : (
        data.map(repostory => <Text key={repostory.id}>{repostory.name}</Text>)
      )}
    </Container>
  )
}

mapStateToProps = state => ({
  repositories: state.repositories,
})

mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories)
