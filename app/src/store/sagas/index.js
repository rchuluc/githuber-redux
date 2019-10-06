import {all, call, put, takeLatest} from 'redux-saga/effects'
import Api from '@services/api'
import * as loginActions from '@actions/login'
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

export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)])
}
