import { utils, functions } from './functions.js';
import { Accounts, AccountController } from "/accounts.js";


const instAccountController = new AccountController;

// Accounts - Transactions

idAccountSec.addEventListener("click", (event) => {
	event.preventDefault();

	console.log("Ex2Click:", event.target);
	let idLeftClick = event.target.id;
	console.log("leftClick:", idLeftClick);
	//debugger;

	let elClicked = event.target;
	let parentposition = elClicked.parentElement;
	let grandparent = parentposition.parentElement;


	switch (elClicked.className) {

		case "createAccount": {
			console.log("in CreateAccount Case :", event.target);
			const newCard = functions.createForm(idInputForm, event.target);
			break;
		}
		case "addAccount": {
			console.log("inaddAccount Case :", event.target, idAcctNamein.value);
			const newAcctList = instAccountController.createAccount(idAcctNamein.value, idAcctBal.value);
			console.log("inaddAccount Case :", instAccountController.accountList);
			// Delete the input form after updating accountList thro instAccountController.

			const newCard = functions.addAccount(idLeftPanel, idAcctNamein.value, idAcctBal.value);
			const varDelCard = functions.delCard(parentposition, grandparent);
			// const messageid = idMessage;
			let statistics1 = functions.updateStatistics(idStatusPanel, instAccountController)
			break;
		}
		case "createDep": {
			//console.log("addBef Case :", event.target.parentElement.);

			let acctName = utils.recoverAccName(event.target.id)
			// let acctName = idAcctName.value;  
			const newCard = functions.createForm(parentposition, event.target, acctName) // idInputForm)
			break;
		}
		case "addDeposit": {
			// console.log("addDeposit Case :", event.target.parentElement);
			// console.log("addDeposit amt Case :", idDepAcctName.value, idInputDeposit.value);
			let depAccount = idDepAcctName.value,
					depAmount = idInputDeposit.value;
			let postedAccount = instAccountController.postDeposit(depAccount, depAmount);
					console.log("inaddDeposit Case :", postedAccount, instAccountController.accountList);
					let postBalanceID = utils.recreateIDforBalance(postedAccount);
					console.log("addDeposit amt Case :", postBalanceID);
					// parentposition = postBalanceID.parentElement;
					// console.log("parentposition: assDeposit Case :", parentposition);
					document.getElementById(postBalanceID).value = postedAccount.bal;
					
					const varDelCard = functions.delCard(parentposition, grandparent);
					let statistics1 = functions.updateStatistics(idStatusPanel, instAccountController);
					break;
				}


		case "createWDr": {
			
			let acctName = utils.recoverAccName(event.target.id)
			// let acctName = idAcctName.value;  
			const newCard = functions.createForm(parentposition, event.target, acctName) // idInputForm)
			break;

	}
		case "postWithdraw": {
			// alert("posting Withdrawal");
			let WdrawAccount = idWdrAcctName.value,
					WdrawAmount = idInputWithdraw.value;
			let postedAccount = instAccountController.postWithdrawal(WdrawAccount, WdrawAmount);
			console.log("inpostWithdraw Case :", postedAccount, instAccountController.accountList);
			let postBalanceID = utils.recreateIDforBalance(postedAccount);
			console.log("inpostWithdraw amt Case :", postBalanceID);
			document.getElementById(postBalanceID).value = postedAccount.bal;
					
			const varDelCard = functions.delCard(parentposition, grandparent);
			let statistics1 = functions.updateStatistics(idStatusPanel, instAccountController);
			break;
		}
		case "del": {
			console.log("inDel :", event.target.parentElement);
			let parentposition = elClicked.parentElement;
			let grandparent = parentposition.parentElement;
			if ( elClicked.id.slice(0, 5) == "idDL:") {
				console.log("inDel  is deleteAccount :", true);
				let acctName = utils.recoverAccName(event.target.id);
				let newAcctList = instAccountController.removeAccount(acctName);
				let statistics1 = functions.updateStatistics(idStatusPanel, instAccountController);
				console.log("in del afterDelete",newAcctList);
			}
				


			const newCard = functions.delCard(parentposition, grandparent);
			//console.log("in del newCard",newCard);
			break;
		}





		default: {
			console.log("Not Programmed for :", event.target);
			break;
		}
	}


});
		

