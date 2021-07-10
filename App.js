import * as React from 'react';
import { View } from 'react-native';
import Auth from './screens/Auth';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppNavigator } from './components/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  AuthScreen: { screen: Auth },
  Switch: { screen: AppNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
