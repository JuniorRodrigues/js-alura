function displayBankStatement (operationName) {
    const args          = Array.from(arguments);
    args.shift();
    const messages      = args.join('\n');

    console.log(`-- ${operationName} --`);
    console.log(messages);
    console.log('------\n');
}

export class CheckingAccount {
    branch;
    costumer;

    // Nova convenção para valores realmente privados (Declaração: #balance = 0; Acesso: this.#balance;
    _balance = 0;

    withdraw (amount) {
        if (this._balance < amount) return;

        const previousBalance = this._balance;
        this._balance -= amount;

        displayBankStatement(
            'Withdraw',
            `Saldo anterior ${previousBalance}`,
            `Saque ${amount}`,
            `Saldo atual ${this._balance}`
        );
    };

    deposit(amount) {
        if (amount <= 0) return;

        const previousBalance = this._balance;
        this._balance += amount;

        displayBankStatement(
            'Deposit',
            `Saldo anterior ${previousBalance}`,
            `Depósito ${amount}`,
            `Saldo atual ${this._balance}`
        );
    }
};
