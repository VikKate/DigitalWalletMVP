import React from 'react';
import {Divider, FlatList} from 'native-base';
import {useSelector} from 'react-redux';
import TransactionsListItem from './TransactionsListItem';
import {EmptyList} from '../../components';
import {selectedCardTransactions} from '../../store/modules/cards';
import I18n from '../../utils/i18n';

const TransactionsList = () => {
  const cards = useSelector(state => state.cards.cards);
  const transactions = useSelector(selectedCardTransactions);

  const keyExtractor = item => item.id;
  const renderItem = ({item}) => (
    <TransactionsListItem
      type={item.type}
      amount={item.amount}
      comment={item.comment}
      created={item.created}
    />
  );

  return transactions.length ? (
    <FlatList
      data={transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
    />
  ) : cards.length ? (
    <EmptyList message={I18n.t('noTransactionsMessage')} />
  ) : null;
};

export default TransactionsList;
