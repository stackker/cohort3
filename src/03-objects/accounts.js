
class Accounts {
  constructor(accName, bal) {
    this.accName = accName;
    this.bal = bal;
  }

  deposit(depAmt) {

    if (depAmt <= 0) {
      let error = "Deposit Amt must be greater than 0";
      console.log(error);
      return error;
    } else {
      this.bal += depAmt;
      return this.bal;
    }
  }

  withdraw(withdrawAmt) {

    if (withdrawAmt <= 0) {
      let error = "Withdrawn Amt must be greater than 0";
      console.log(error);
      return error;
    } else {
      this.bal -= withdrawAmt;
      return this.bal
    }
  }
  getbalance() {
    return this.bal;
  }
}

class AccountController {

  constructor() {
    this.accountList = [];

  }

  createAccount(accName, bal) {
    // console.log("accName: ", accName, "bal: ", bal);
    this.account = new Accounts(accName, bal);
    // let account.accName = accName;
    // let account.bal = bal;
    return this.accountList.push(this.account);
  }

  removeAccount(accName) {
    this.accountList = this.accountList.filter(account => {
      return account.accName !== accName;
    });
  }

  totalAccounts() {
    // console.log("accountList :", this.accountList)
    return this.accountList.reduce(((acc, account) => acc + account.bal), 0);
  }

  highestAccount() {
    let maxAccount;
    let i = 0;
    let maxVal = this.accountList[0].bal;
    this.accountList.forEach((account, indx) => {
      //console.log(account.bal, indx);
      if (maxVal <= account.bal) {
        maxVal = account.bal;
        maxAccount = account;
      }
      // console.log(maxVal, account.bal, indx, maxAccount);
    });
    return maxAccount;
  }


  lowestAccount() {
    let minAccount;
    let i = 0;
    let minVal = this.accountList[0].bal;
    let lowAccount = this.accountList.forEach((account, indx) => {
      //console.log(account.bal, indx);
      if (minVal >= account.bal) {
        minVal = account.bal;
        minAccount = account;
      }
      // console.log(minVal, account.bal, indx, minAccount);
    });
    return minAccount;
  }

}






// const functions = {
//   // nothing in here as of yet
// }
export { Accounts, AccountController };









