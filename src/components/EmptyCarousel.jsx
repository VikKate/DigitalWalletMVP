import React from 'react';
import {Center, Heading, HStack, Icon} from 'native-base';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import I18n from '../utils/i18n';

const EmptyCarousel = ({message}) => (
  <Center flex={1}>
    <HStack alignItems="center" space={2}>
      <Heading>{I18n.t('userHintStart')}</Heading>
      <Icon as={IoniconsIcon} name="settings-outline" size="sm" />
    </HStack>
    <Heading>{I18n.t('userHintEnd')}</Heading>
  </Center>
);

export default EmptyCarousel;
