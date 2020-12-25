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
import {Provider as StorePrivider} from 'react-redux'
import {getStore} from './src/Redux/Store';

const store = getStore();

const App: () => React$Node = () => {
  const APP_THEME = Colors.Blue;
  return (
        <SafeAreaView style={{flex: 1}}>
          <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
          <StorePrivider store={store}>
            <RootNavigator />
          </StorePrivider>
        </SafeAreaView>
  );
};
export default App;