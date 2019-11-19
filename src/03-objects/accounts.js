
class Accounts {
	constructor(accName, bal) {
		this.accName = accName;
		this.bal = Number(bal);
	}

	deposit(depAmt) {

		if (Number(depAmt) <= 0) {
			let error = "Deposit Amt must be greater than 0";
			console.log(error);
			return error;
		} else {
			this.bal += Number(depAmt);
			return this.bal;
		}
	}

	withdraw(withdrawAmt) {

		if (Number(withdrawAmt) <= 0) {
			let error = "Withdrawn Amt must be greater than 0";
			console.log(error);
			return error;
		}
		else {
			debugger;
			let originalBal = this.bal;
			this.bal -= Number(withdrawAmt);
			if (this.bal < 0) {
				alert(`Overdraft not permitted. Balance: ${this.bal}`);
				let error = "Balance must be greater than 0";
				console.log(error);
				this.bal = originalBal;
				return originalBal;
			} else { 
				return this.bal }

		}
	}
	getbalance() {
		return this.bal;
	}
}

class AccountController {

	constructor() {
		// super(accName, bal)
		this.accountList = [];

	}
	postDeposit(accName, depAmount) {
		let postedAccount;
		for (let account of this.accountList) {
			// console.log("inCreateDep Meth:", this.accountList);
			// debugger;
			if (accName === account.accName) {
				console.log("inCreateDep Meth:", true);
				account.deposit(Number(depAmount));
				postedAccount = account;
				break;

			};
			console.log("inCreateDep Meth:", postedAccount);
		}
		return postedAccount;
	}

	postWithdrawal(accName, withdrawAmount) {
		let postedAccount;
		for (let account of this.accountList) {
			// console.log("inCreateDep Meth:", this.accountList);
			// debugger;
			if (accName === account.accName) {
				console.log("in postWithdrawal Meth:", true);
				account.withdraw(Number(withdrawAmount));
				postedAccount = account;
				break;
			};
			console.log("inCreateDep Meth:", postedAccount);
		}
		return postedAccount;

	}




	createAccount(accName, bal) {
		// console.log("accName: ", accName, "bal: ", bal);
		this.Account = new Accounts(accName, bal);
		// let account.accName = accName;
		// let account.bal = bal;
		return this.accountList.push(this.Account);
	}

	removeAccount(accName) {
		
		this.accountList = this.accountList.filter(Account => {
			return Account.accName !== accName;
		});
		return this.accountList;
	}

	totalAccounts() {
		// console.log("accountList :", this.accountList)
		return this.accountList.reduce(((acc, Account) => acc + Account.bal), 0);
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









