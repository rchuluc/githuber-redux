import {all, call, put, select, takeLatest} from 'redux-saga/effects'
import Api from '@services/api'
import * as loginActions from '@actions/login'
import * as repositoriesActions from '@actions/repositories'

import {navigate} from '@services/navigation'

function* login(action) {
  try {
    const {username} = action.payload

    yield call(Api.get, `/users/${username}`)
    yield put(loginActions.loginSuccess(username))
    navigate('Repositories')
  } catch (err) {
    yield put(loginActions.loginFailure())
  }
}

function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login)
    const response = yield call(Api.get, `users/${username}/repos`)
    yield put(repositoriesActions.loadRepositoriesSuccess(response.data))
  } catch (err) {
    yield put(repositoriesActions.loadRepositoriesFailure())
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ])
}
