import React, {useCallback} from 'react';
import {Alert} from 'react-native';
import {FlatList} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import CardsListItem from './CardsListItem';
import {EmptyList} from '../../components';
import {cardRemoved} from '../../store/modules/cards';
import I18n from '../../utils/i18n';

const CardsList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards);

  const removeCard = useCallback(
    id => {
      dispatch(cardRemoved(id));
    },
    [dispatch],
  );

  const onRemove = id => {
    Alert.alert(
      I18n.t('removeCardAlertTitle'),
      I18n.t('removeCardAlertMessage'),
      [
        {
          text: I18n.t('cancelButtonTitle'),
          style: 'cancel',
        },
        {text: I18n.t('okButtonTitle'), onPress: () => removeCard(id)},
      ],
    );
  };

  const keyExtractor = item => item.id;
  const renderItem = ({item}) => (
    <CardsListItem id={item.id} name={item.name} onRemove={onRemove} />
  );

  return cards.length ? (
    <FlatList
      py={3}
      data={cards}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  ) : (
    <EmptyList message={I18n.t('noCardsMessage')} />
  );
};

export default CardsList;
