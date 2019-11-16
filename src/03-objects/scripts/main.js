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
			break;
		}
		case "createDep": {
			//console.log("addBef Case :", event.target.parentElement.);

			let acctName = utils.recoverAccName(event.target)
			// let acctName = idAcctName.value;  
			const newCard = functions.createForm(parentposition, event.target, acctName) // idInputForm)
			break;
		}
		case "addDeposit": {
			console.log("addDeposit Case :", event.target.parentElement);
			console.log("addDeposit amt Case :", idDepAcctName.value, idInputDeposit.value);
			for (let aName of instAccountController.accountList) {
				console.log("in for :", aName, idDepAcctName.value)
				if (aName.accName === idDepAcctName.value) {
					console.log("TRUE");

				}
			};
			//const updateedDeposit  = instAccountController.account.deposit(idDepAcctName.value, Number(idInputDeposit.value));
			console.log("inaddAccount Case :", instAccountController.accountList);
			break;
		}
		case "addAft": {
			//console.log("addBef Case :", event.target.parentElement.);

			let parentposition = elClicked.parentElement;
			const newCard = functions.positionCard(parentposition, "afterend");
			break;

		}

		case "del": {
			console.log("inDel :", event.target.parentElement);
			let parentposition = elClicked.parentElement;
			let grandparent = parentposition.parentElement;
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