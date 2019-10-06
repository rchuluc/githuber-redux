const init = {
  loadding: false,
  data: [],
  error: false,
}

export default repositoriesReducer = (state = init, actions) => {
  switch (actions.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return {...state, loading: true}
    case 'LOAD_REPOSITORIES_SUCCESS':
      return {
        ...state,
        data: actions.payload.data,
        loading: false,
        error: false,
      }
    case 'LOAD_REPOSITORIES_FAILURE':
      return {...state, loadding: false, error: true}
    default:
      return state
  }
}
