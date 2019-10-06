const init = {
  username: null,
  error: false,
  loading: false,
}

export default loginReducer = (state = init, actions) => {
  switch (actions.type) {
    case 'LOGIN_REQUEST':
      return {...state, loading: true}
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: actions.payload.username,
        error: false,
        loading: false,
      }
    case 'LOGIN_FAILURE':
      return {...state, error: true, loading: false}
    default:
      return state
  }
}
