import { createStackNavigator, NavigationScreenProp } from 'react-navigation'

import Main from '../screens/Main'
import Push from '../screens/Push'
import Modal from '../screens/Modal'

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>
};

export const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  { initialRouteName: 'Main', mode: 'card', headerMode: 'none' }
)

export default createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  { initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none' },
)

