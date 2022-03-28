import React, {useLayoutEffect, useState} from 'react';
import {Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {FadeInView, HeaderButton} from '../components';
import {CardsList} from '../features';
import {AddCardDialog} from '../features/modals';
import I18n from '../utils/i18n';

const Settings = () => {
  const navigation = useNavigation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onDialogClose = () => setIsDialogOpen(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: I18n.t('cardsScreenTitle'),
      headerRight: () => (
        <HeaderButton
          iconName="add"
          onPress={() => setIsDialogOpen(!isDialogOpen)}
        />
      ),
    });
  });

  return (
    <FadeInView>
      <Box flex={1}>
        <CardsList />
        <AddCardDialog isOpen={isDialogOpen} onClose={onDialogClose} />
      </Box>
    </FadeInView>
  );
};

export default Settings;
