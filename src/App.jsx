import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {AppNavigator} from './navigators';
import {store, persistor} from './store/index';
import {theme} from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            <AppNavigator />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
