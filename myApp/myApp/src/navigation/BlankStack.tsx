import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Blank from '../screens/Blank/BlankScreen';
import {getScreenOptions} from './navigation.options';

const Stack = createStackNavigator();

const BlankStack = (): JSX.Element => {
  const screenOptions = getScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Blank" component={Blank} />
    </Stack.Navigator>
  );
};

export default BlankStack;
