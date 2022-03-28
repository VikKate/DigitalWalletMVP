import React from 'react';
import {useColorModeValue, useTheme} from 'native-base';
import {
  NavigationContainer as DefaultNavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {routeChanged} from '../store/modules/settings';

const NavigationContainer = ({children, ...props}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  return (
    <DefaultNavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: useColorModeValue(colors.bgLight, colors.bgDark),
        },
      }}
      onStateChange={({index, routeNames, type}) => {
        if (index in routeNames && type === 'tab') {
          dispatch(routeChanged(routeNames[index]));
        }
      }}
      {...props}>
      {children}
    </DefaultNavigationContainer>
  );
};

export default NavigationContainer;
