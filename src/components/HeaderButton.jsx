import React from 'react';
import {Icon, IconButton} from 'native-base';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const HeaderButton = ({iconName, onPress}) => (
  <IconButton
    mx={3}
    icon={<Icon as={IoniconsIcon} name={iconName} size="sm" />}
    onPress={onPress}
  />
);

export default HeaderButton;
