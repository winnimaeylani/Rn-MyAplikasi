/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from './src/Routes/Navigation';
import {AppStatusBar} from './src/Components';
import {Colors} from './src/Themes/Colors';

const App: () => React$Node = () => {
  const APP_THEME = Colors.Blue;
  return (
        <SafeAreaView style={{flex: 1}}>
          <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
          <RootNavigation />
        </SafeAreaView>
  );
};
export default App;