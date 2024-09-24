import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import BootSplash from 'react-native-bootsplash';
import {persistor, store} from './Reducers/store';
import {Provider} from 'react-redux';
import {MainNavigation} from './Src/Navigation/MainNavigation';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    BootSplash.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <MainNavigation />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
