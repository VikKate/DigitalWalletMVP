import React, {useState} from 'react';
import {Box, Button, Text, VStack, useColorModeValue} from 'native-base';
import {AddTransactionDialog} from '../modals';
import I18n from '../../utils/i18n';

const CardsCarouselItem = ({id, name, balance}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onDialogClose = () => setIsDialogOpen(false);
  const bg = useColorModeValue('cardBgLight', 'cardBgDark');
  return (
    <Box h="100%" justifyContent="center">
      <VStack
        p={3}
        space={5}
        shadow={5}
        alignItems="center"
        justifyContent="space-around"
        bg={bg}
        borderRadius="xl">
        <Text fontSize="xl" w="100%" noOfLines={1} isTruncated>
          {name}
        </Text>
        <Text fontSize="2xl" bold>
          {balance}&nbsp;$
        </Text>
        <Button
          colorScheme="primary"
          onPress={() => setIsDialogOpen(!isDialogOpen)}>
          {I18n.t('processButtonTitle')}
        </Button>
      </VStack>
      <AddTransactionDialog
        cardId={id}
        cardName={name}
        isOpen={isDialogOpen}
        onClose={onDialogClose}
      />
    </Box>
  );
};

export default CardsCarouselItem;
