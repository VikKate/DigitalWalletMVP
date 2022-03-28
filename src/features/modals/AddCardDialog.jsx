import React, {useCallback, useRef, useState} from 'react';
import {
  AlertDialog,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import {useDispatch} from 'react-redux';
import {cardCreated} from '../../store/modules/cards';
import I18n from '../../utils/i18n';

const AddCardDialog = ({isOpen, onClose}) => {
  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const close = useCallback(() => {
    onClose();
    setName('');
    setAmount('');
    setError('');
  }, [onClose]);

  const createCard = useCallback(() => {
    try {
      dispatch(cardCreated(name, parseFloat(amount)));
      close();
    } catch (err) {
      setError(err);
    }
  }, [dispatch, name, amount, close]);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={close}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>
          <Text fontSize="xl">{I18n.t('addCardDialogTitle')}</Text>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <VStack space={3}>
            <FormControl>
              <FormControl.Label>
                {I18n.t('cardNameInputLabel')}
              </FormControl.Label>
              <Input
                value={name}
                onChangeText={setName}
                placeholder={I18n.t('cardNameInputPlaceholder')}
              />
            </FormControl>
            <FormControl isRequired isInvalid={error}>
              <FormControl.Label>
                {I18n.t('cardAmountInputLabel')}
              </FormControl.Label>
              <Input
                value={amount}
                onChangeText={text => {
                  setError('');
                  setAmount(text);
                }}
                keyboardType="numeric"
                placeholder={I18n.t('cardAmountInputPlaceholder')}
                InputRightElement={
                  <Text mr={3} fontSize="md">
                    $
                  </Text>
                }
              />
              <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
            </FormControl>
          </VStack>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <HStack flex={1} justifyContent="space-around">
            <Button colorScheme="success" onPress={createCard}>
              {I18n.t('okButtonTitle')}
            </Button>
          </HStack>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default AddCardDialog;
