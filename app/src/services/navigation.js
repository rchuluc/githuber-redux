import {NavigationActions} from 'react-navigation'

let navigator

export const setNavigator = ref => {
  navigator = ref
}

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  )
}
