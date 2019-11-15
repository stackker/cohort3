import functions from './functions.js';
import{Accounts,AccountController} from "/accounts.js";

const instAccountController = new AccountController;

// Accounts

idAccountSec.addEventListener("click", (event) => {
	event.preventDefault();
// idLeftPanel.addEventListener("click", (event) => {
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
				console.log("inaddAccount Case :", event.target, idAcctName.value);
				const newAcctList = instAccountController.createAccount(idAcctName.value, idAcctBal.value);
				console.log("inaddAccount Case :",  instAccountController.accountList);
				// Delete the input form after updating accountList thro instAccountController.
				
				 const newCard = functions.addAccount(idLeftPanel, idAcctName.value, idAcctBal.value);
				 const varDelCard = functions.delCard(parentposition, grandparent);
		    break;
		}
		case "addBef": {
			//console.log("addBef Case :", event.target.parentElement.);

			let parentposition = elClicked.parentElement;
			// position = "beforebegin";  property of the method           
			const newCard = functions.positionCard(parentposition, "beforebegin")
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