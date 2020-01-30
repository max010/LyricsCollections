import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/app-navigation';

import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from './src/reducers';
import rootEpic from './src/epics';
import {composeWithDevTools} from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
