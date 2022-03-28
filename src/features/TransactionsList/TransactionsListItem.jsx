import React from 'react';
import {HStack, Text} from 'native-base';
import {ListItem} from '../../components';
import {TransactionType} from '../../store/modules/cards/types';

const TransactionsListItem = ({type, amount, comment, created}) => (
  <ListItem plain>
    {comment ? (
      <Text fontSize="md" flex={0.7}>
        {comment}
      </Text>
    ) : (
      <HStack flex={0.7} space={2}>
        <Text variant="secondary" fontSize="md">
          {new Date(created).toLocaleDateString()}
        </Text>
        <Text variant="secondary" fontSize="md">
          {new Date(created).toLocaleTimeString()}
        </Text>
      </HStack>
    )}
    <Text
      fontSize="md"
      flex={0.25}
      textAlign="right"
      color={type === TransactionType.Income ? 'incomeText' : 'expenseText'}>
      {type === TransactionType.Income ? '+' : '-'}&nbsp;{amount}&nbsp;$
    </Text>
  </ListItem>
);

export default TransactionsListItem;
