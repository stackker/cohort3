import functions from './functions.js';



// Accounts
idAccountSec.addEventListener("click", (event) => {
// idLeftPanel.addEventListener("click", (event) => {
	console.log("Ex2Click:", event.target);
	let idLeftClick = event.target.id;
	console.log("leftClick:", idLeftClick);

	let elClicked = event.target;
	switch (elClicked.className) {

		case "createAccount": {
			console.log("inAddCard Case :", event.target);
			const newCard = functions.createForm(idInputForm, event.target);
			break;
		}
		// case "addCard": {
		//     console.log("inAddCard Case :", event.target);
		//     const newCard = functions.addCard(idLeftPanel,event.target);
		//     break;
		// }
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