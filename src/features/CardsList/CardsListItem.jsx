import React from 'react';
import {Icon, IconButton, Text} from 'native-base';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {ListItem} from '../../components';

const CardsListItem = ({id, name, onRemove}) => (
  <ListItem>
    <Text fontSize="lg" w="85%" noOfLines={1} isTruncated>
      {name}
    </Text>
    <IconButton
      icon={<Icon as={IoniconsIcon} name="trash" size="sm" />}
      onPress={() => onRemove(id)}
    />
  </ListItem>
);

export default CardsListItem;
