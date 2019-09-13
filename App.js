import React from 'react'
import {
  createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import {Provider as AuthProvider} from "./src/Context/AuthContext";
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from "./src/Screens/ResolveAuthScreen";
import { Provider as LocationProvider} from './src/Context/LocationContext';
import { Provider as TrackProvider } from './src/Context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
    title: 'Tracks',
    tabBarIcon: <FontAwesome name="list" size={15} />
}

const switchNavigator = createSwitchNavigator({
   EmptyAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);
 export default ()=>{
   return(
       <TrackProvider>
           <LocationProvider>
               <AuthProvider>
                 <App ref={ (navigator)=> { setNavigator(navigator) }} />
               </AuthProvider>
           </LocationProvider>
       </TrackProvider>
   );
 };