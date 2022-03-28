import {Card, Transaction, TransactionType} from './types';
import I18n from '../../../utils/i18n';

/** Generate id for a new entity in the specified list */
const createId = (entities) => {
    return entities.length ? entities[entities.length - 1].id + 1 : 1;
};

/** Create default card name */
const createCardName = (id) => {
    return id ? `${I18n.t('defaultCardTitle')} ${id}` : I18n.t('fallbackCardTitle');
};

/** Serialize class entity to plain JS object */
const serialized = (entity) => {
    return JSON.parse(JSON.stringify(entity));
};

/**
 * Add new card to the storage
 * @param {string} name - card name
 * @param {number} balance - initial card balance
 */
export const cardCreated = {
    reducer: (state, action) => {
        let { name, balance } = action.payload;
        if (typeof balance !== 'number' || isNaN(balance) || balance < 0) {
            throw I18n.t('balanceErrorMessage');
        }
        const id = createId(state.cards);
        const card = new Card(id, name || createCardName(id), balance);
        state.cards.push(serialized(card));
    },
    prepare: (name, balance) => ({
        payload: { name, balance },
    }),
};

/**
 * Save selected card ID to the storage
 * @param {number} id - card ID
 */
export const cardSelected = (state, action) => {
    const card = state.cards.find(({id}) => id === action.payload);
    if (!card) {
        throw I18n.t('cardErrorMessage');
    }
    state.selectedCardId = card.id;
};

/**
 * Remove card and its transactions from the storage
 * @param {number} id - card ID
 */
export const cardRemoved = (state, action) => {
    if (action.payload === state.selectedCardId) {
        const cardIndex = state.cards.findIndex(({id}) => id === action.payload);
        const nextCardIndex = cardIndex === state.cards.length - 1 ? state.cards.length - 2 : cardIndex + 1;
        state.selectedCardId = state.cards[nextCardIndex] ? state.cards[nextCardIndex].id : null;
    }
    state.cards = state.cards.filter(({id}) => id !== action.payload);
    state.transactions = state.transactions.filter(({cardId}) => cardId !== action.payload);
};

/**
 * Add card transaction to the storage, update card balance
 * @param {number} cardId - card ID
 * @param {TransactionType} type - transaction type
 * @param {number} amount - amount for the transaction
 * @param {string} [comment] - comment tag
 */
 export const transactionCreated = {
    reducer: (state, action) => {
        const { cardId, type, amount, comment } = action.payload;
        const card = state.cards.find(({id}) => id === cardId);
        if (!card) {
            throw I18n.t('cardErrorMessage');
        }
        if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
            throw I18n.t('amountErrorMessage');
        }
        if (type === TransactionType.Expense && amount > card.balance) {
            throw I18n.t('transactionErrorMessage');
        }
        const id = createId(state.transactions);
        const transaction = new Transaction(id, type, amount, comment || "", cardId);
        state.transactions.push(serialized(transaction));
        if (type === TransactionType.Expense) {
            card.balance -= amount;
        }
        if (type === TransactionType.Income) {
            card.balance += amount;
        }
        state.selectedCardId = cardId;
    },
    prepare: (cardId, type, amount, comment) => ({
        payload: { cardId, type, amount, comment },
    }),
};
