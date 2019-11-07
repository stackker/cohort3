
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

        if (withdrawAmt<= 0) {
            let error = "Withdrawn Amt must be greater than 0";
            console.log(error);
            return error;
        } else {
            this.bal -= withdrawAmt;
            return this.bal
        }
    }
    balance() {
        return this.bal;
    }
}


const functions = {
    // nothing in here as of yet
}
export { Accounts, functions };









