import React from 'react';
import {Center, Text} from 'native-base';

const EmptyList = ({message}) => (
  <Center flex={1}>
    <Text variant="secondary">{message}</Text>
  </Center>
);

export default EmptyList;
