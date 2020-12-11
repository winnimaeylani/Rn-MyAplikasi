//@flow

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'; 
import {HomeScreen, DetailsScreen} from '../Screens/ScreensConfig';
import Routes from '../Routes/Routes';

const Stack = createStackNavigator();

const MainStack: () => React$Node = () => {
    return (
        <Stack.Navigator initialRoutesName={Routes.Home}>
          <Stack.Screen name={Routes.Home} component={HomeScreen} />
          <Stack.Screen name={Routes.Details} component={DetailsScreen} />
        </Stack.Navigator>
    );
  };

  export default () => (
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
  );