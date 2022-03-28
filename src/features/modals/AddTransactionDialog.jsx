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
import {transactionCreated} from '../../store/modules/cards';
import {TransactionType} from '../../store/modules/cards/types';
import I18n from '../../utils/i18n';

const AddTransactionDialog = ({cardId, cardName, isOpen, onClose}) => {
  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const close = useCallback(() => {
    onClose();
    setAmount('');
    setComment('');
    setError('');
  }, [onClose]);

  const addIncome = useCallback(() => {
    try {
      dispatch(
        transactionCreated(
          cardId,
          TransactionType.Income,
          parseFloat(amount),
          comment,
        ),
      );
      close();
    } catch (err) {
      setError(err);
    }
  }, [dispatch, cardId, amount, comment, close]);

  const addExpense = useCallback(() => {
    try {
      dispatch(
        transactionCreated(
          cardId,
          TransactionType.Expense,
          parseFloat(amount),
          comment,
        ),
      );
      close();
    } catch (err) {
      setError(err);
    }
  }, [dispatch, cardId, amount, comment, close]);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={close}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>
          <Text fontSize="xl">{cardName}</Text>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <VStack space={3}>
            <FormControl isRequired isInvalid={error}>
              <FormControl.Label>
                {I18n.t('transactionAmountInputLabel')}
              </FormControl.Label>
              <Input
                value={amount}
                onChangeText={text => {
                  setError('');
                  setAmount(text);
                }}
                keyboardType="numeric"
                placeholder={I18n.t('transactionAmountInputPlaceholder')}
                InputRightElement={
                  <Text mr={3} fontSize="md">
                    $
                  </Text>
                }
              />
              <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                {I18n.t('transactionCommentInputLabel')}
              </FormControl.Label>
              <Input
                value={comment}
                onChangeText={setComment}
                placeholder={I18n.t('transactionCommentInputPlaceholder')}
              />
            </FormControl>
          </VStack>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <HStack flex={1} justifyContent="space-around">
            <Button colorScheme="success" onPress={addIncome}>
              {I18n.t('incomeButtonTitle')}
            </Button>
            <Button colorScheme="error" onPress={addExpense}>
              {I18n.t('expenseButtonTitle')}
            </Button>
          </HStack>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default AddTransactionDialog;
