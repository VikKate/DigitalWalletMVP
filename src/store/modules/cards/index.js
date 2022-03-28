import {createSlice, createSelector} from '@reduxjs/toolkit';
import * as reducers from './actions';

const initialState = {
  cards: [
    {id: 1, name: "Card 1", balance: 544.25, initialAmount: 150},
    {id: 2, name: "Card 2", balance: 0, initialAmount: 0},
    {id: 3, name: "Card 3", balance: 351, initialAmount: 1000},
  ],
  transactions: [
    {id: 1, created: 1644451200000, type: 'Income', amount: 520, comment: "January salary", cardId: 1},
    {id: 2, created: 1644624069587, type: 'Expense', amount: 15.5, comment: "Groceries", cardId: 1},
    {id: 3, created: 1644710400000, type: 'Expense', amount: 110.25, comment: "Utility bill", cardId: 1},
    {id: 4, created: 1648770069587, type: 'Income', amount: 250, comment: "Gift", cardId: 3},    
    {id: 5, created: 1648010069587, type: 'Expense', amount: 899, comment: "New bike", cardId: 3},    
  ],
  selectedCardId: null,
};

const cardsSlice = createSlice({name: 'cards', initialState, reducers});

export const {cardCreated, cardSelected, cardRemoved, transactionCreated} = cardsSlice.actions;

/** Get transactions by card ID */
export const cardTransactions = createSelector(
  state => state.cards.transactions,
  (_, id) => id,
  (transactions, id) => id
    ? [...transactions.filter(({cardId}) => cardId === id)].reverse()
    : [],
);

/** Get selected card transactions */
export const selectedCardTransactions = createSelector(
  state => state.cards.transactions,
  state => state.cards.cards,
  state => state.cards.selectedCardId,
  (transactions, cards, selectedCardId) => {
    if (!selectedCardId) {
      if (!cards.length) {
        return [];
      }
      selectedCardId = cards[0].id;
    }
    return [...transactions.filter(({cardId}) => cardId === selectedCardId)].reverse();
  }
);

/** Get index of selected card in cards list */
export const selectedCardIndex = createSelector(
  state => state.cards.cards,
  state => state.cards.selectedCardId,
  (cards, selectedCardId) => selectedCardId
    ? Math.max(cards.findIndex(({id}) => id === selectedCardId), 0)
    : 0,
);

export default cardsSlice.reducer;
