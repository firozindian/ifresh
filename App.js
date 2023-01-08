import React from 'react'
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/MainNavigator'
import ViewContainer from './src/components/HOC/ViewContainer';

const App = () => {
  return (
    <ViewContainer>
      <StatusBar backgroundColor={'#27ab46'}/>
    <MainNavigation />
    </ViewContainer>
  )
}

export default App