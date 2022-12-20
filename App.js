/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';

import Home from './src/screen/Home';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#000000',
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Home />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
