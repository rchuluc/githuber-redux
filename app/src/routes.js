import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from '@screens/login'
import Repositories from '@screens/repositories'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Repositories,
  }),
)

export default Routes
