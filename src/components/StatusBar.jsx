import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useColorModeValue} from 'native-base';

const StatusBar = () => (
  <RNStatusBar
    barStyle={useColorModeValue('dark-content', 'light-content')}
    backgroundColor="transparent"
    translucent
  />
);

export default StatusBar;
