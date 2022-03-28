import React, {useCallback} from 'react';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSelector, useDispatch} from 'react-redux';
import {EmptyCarousel} from '../../components';
import {cardSelected, selectedCardIndex} from '../../store/modules/cards';
import CardsCarouselItem from './CardsCarouselItem';

const CardsCarousel = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards);
  const firstItem = useSelector(selectedCardIndex);
  const {width} = useWindowDimensions();

  const selectCard = useCallback(
    id => {
      dispatch(cardSelected(id));
    },
    [dispatch],
  );

  const onSnapToItem = index => selectCard(cards[index].id);
  const renderItem = ({item}) => (
    <CardsCarouselItem id={item.id} name={item.name} balance={item.balance} />
  );

  return cards.length ? (
    <Carousel
      data={cards}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.7}
      firstItem={firstItem}
      onSnapToItem={onSnapToItem}
    />
  ) : (
    <EmptyCarousel />
  );
};

export default CardsCarousel;
