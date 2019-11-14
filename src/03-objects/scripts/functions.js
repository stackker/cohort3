const functions = {



	addListItem: (inputVal, parentDiv) => {
		const ordList = parentDiv;
		const li = document.createElement("li");
		const text = document.createTextNode(inputVal);
		li.appendChild(text);
		//console.log("from addListItems: ", ordList.id,inputVal )
		ordList.appendChild(li);
	},

	showItems: (ol, showDiv) => {
		showDiv.textContent = ol.textContent;
	},

	deleteItem: (ol) => {
		ol.lastElementChild.remove();
	},

	// Exercise 2:

	counter: 0,

	createForm: (parentID, buttonClickd) => {
		console.log("createForm.buttonClick: ", buttonClickd)
		switch (buttonClickd.className) {
			case "createAccount": {

				// console.log("parentID Add: ", parentID)

				console.log("createForm.addCard case: ", buttonClickd);
//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
						formDiv.className = "card";
// Input for Account Name]
				let acctName = document.createElement("input");
						acctName.setAttribute("placeholder", "Account Name");
						acctName.setAttribute("type", "text");
						acctName.className = "formData";
				formDiv .appendChild(acctName);
// Input for Account BAlance
				let acctBal = document.createElement("input");
						acctBal.setAttribute("placeholder", "Initial Balance");
						acctBal.setAttribute("type", "number");
						acctBal.className = "formData";
				formDiv.appendChild(acctBal);
				formDiv.appendChild(document.createElement("br"));
				// Buttobs Add and Cancel
				let addActBut = document.createElement("button");
						addActBut.className = "add";
						addActBut.innerHTML = "Add Account"
				let cancelActBut = document.createElement("button");
						cancelActBut.className = "del";
						cancelActBut.innerHTML = "Cancel"
				formDiv.appendChild(addActBut);
				// formDiv.appendChild(document.createElement("span"));
				formDiv.appendChild(cancelActBut);


				parentID.appendChild(formDiv);
				break;
			}
				
			default: { console.log("createForm.buttonClick: ", "NOT PROGRAMMED") }
		}
		return parentID;
	},

			


			










	createCard: () => {

		functions.counter++;
		// console.log("from createCard: Hello World");
		let div = document.createElement("div");
		div.setAttribute("count", functions.counter);
		div.className = "card";
		div.textContent = `Account ${functions.counter}`;
		let inputAcctName = document.createElement("input"); // idFormAcctName to be 


		let lBreak = document.createElement("br");
		div.appendChild(lBreak);


		//Create the buttons on the card
		const btnBefore = document.createElement('button');
		btnBefore.className = 'addBef';
		btnBefore.textContent = 'Depost';
		div.appendChild(btnBefore);

		const btnAfter = document.createElement('button');
		btnAfter.className = 'addAft';
		btnAfter.textContent = 'Withdraw';
		div.appendChild(btnAfter);

		const delBtn = document.createElement('button');
		delBtn.className = 'del';
		delBtn.textContent = 'Delete Account';
		div.appendChild(delBtn);

		return div;

	},

	addCard: (parentDiv) => {
		// console.log("addCard-Parent: ", parentDiv);
		let cardInGrp = functions.createCard();
		parentDiv.appendChild(cardInGrp);
		return functions.resultArray(parentDiv, "div", "count");
	},



	positionCard: (parentCard, position) => {
		parentCard.insertAdjacentElement(position, functions.createCard());
		return functions.resultArray(parentDiv, "div", "count");

	},
	delCard: (parentCard, parentDiv) => {
		// console.log("delCard parentDiv", parentDiv);
		parentCard.remove();
		return functions.resultArray(parentDiv, "div", "count");
	},

	resultArray: (parent, elLabel, searchAttib) => {
		// Returns an Array of Resulting nodes for testing after manipulation
		let contentArr = [];
		//console.log("contentArray parent", parent);
		for (let itemColln of parent.getElementsByTagName(elLabel)) {
			contentArr.push(itemColln.getAttribute(searchAttib));
		};

		console.log("contentArray", contentArr);
		return contentArr;

	}






};


export default functions;