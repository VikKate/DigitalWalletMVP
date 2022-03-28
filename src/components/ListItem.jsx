import React from 'react';
import {Box, HStack, useColorModeValue} from 'native-base';

const ListItem = ({children, plain}) => {
  const bg = useColorModeValue('listItemBgLight', 'listItemBgDark');
  return plain ? (
    <HStack p={2} mx={4} alignItems="center" justifyContent="space-between">
      {children}
    </HStack>
  ) : (
    <Box flex={1} p={1}>
      <HStack
        py={1}
        px={3}
        mx={3}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="md"
        shadow={1}
        bg={bg}>
        {children}
      </HStack>
    </Box>
  );
};

export default ListItem;
