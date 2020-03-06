class Account {
  constructor(accountName, balance) {
    this.accountName = accountName;
    this.balance = Number(balance);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance = this.balance + amount;
    }
  }

  withdrawal(amount) {
    let oldBal = this.balance;
    this.balance -= amount;
    if (this.balance < 0) {
      this.balance = oldBal;
    }
  }

  showBalance() {
    return this.balance;
  }
}

class AccountController {
  constructor() {
    this.accountList = [];
  }

  createAccount(accountName, balance) {
    const obj = new Account(accountName, balance);
    this.accountList.push(obj);
  }

  removeAccount(accountName) {
    this.accountList = this.accountList.filter(
      account => account.accountName !== accountName
    );
  }

  totalAccounts() {
    return this.accountList.reduce((acc, cur) => acc + cur.balance, 0);
  }

  highestAccount() {
    return this.accountList.slice().sort((a, b) => b.balance - a.balance)[0];
    // let highestVal = this.accountList.reduce((a, b) => {return Math.max(a, b)});
    // return highestVal;
  }

  lowestAccount() {
    return this.accountList.slice().sort((a, b) => a.balance - b.balance)[0];
  }
}

export default AccountController;
