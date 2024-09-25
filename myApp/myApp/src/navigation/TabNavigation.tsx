﻿import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BlankStack from './BlankStack';
import {getTabBarOptions} from './navigation.options';

interface IScreenOpts {
  route: any;
}

interface ITabBarIconProps {
  focused: boolean;
  size: number;
  color: string;
}

const TabNavigation = (): JSX.Element => {
  // For more information about react navigation visit: https://reactnavigation.org/docs/getting-started
  const Tab = createBottomTabNavigator();
  const tabBarOptions = getTabBarOptions();

  const getIcon = (routeName: string, isFocused: boolean) => {
    // For more information about vector icons visit: https://github.com/oblador/react-native-vector-icons
    let icon;
    switch (routeName) {
      default:
        icon = 'md-square';
    }
    if (!isFocused) {
      icon = icon.concat('-outline');
    }
    return icon;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}: IScreenOpts) => ({
        tabBarIcon: ({focused, size, color}: ITabBarIconProps) => {
          const iconName = getIcon(route.name, focused);
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Blank" component={BlankStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
