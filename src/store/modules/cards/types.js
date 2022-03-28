export class Card {
    constructor (id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.initialAmount = balance;
    };
};

export class Transaction {
    constructor (id, type, amount, comment, cardId) {
        this.id = id;
        this.created = new Date().getTime();
        this.type = type;
        this.amount = amount;
        this.comment = comment;
        this.cardId = cardId;
    };
};

export const TransactionType = {
    Income: "Income",
    Expense: "Expense",
};
