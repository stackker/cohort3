const functions = {



	// addListItem: (inputVal, parentDiv) => {
	// 	const ordList = parentDiv;
	// 	const li = document.createElement("li");
	// 	const text = document.createTextNode(inputVal);
	// 	li.appendChild(text);
	// 	//console.log("from addListItems: ", ordList.id,inputVal )
	// 	ordList.appendChild(li);
	// },

	// showItems: (ol, showDiv) => {
	// 	showDiv.textContent = ol.textContent;
	// },

	// deleteItem: (ol) => {
	// 	ol.lastElementChild.remove();
	// },

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
						acctName.setAttribute("required", "true");
						acctName.className = "formData";
						acctName.id = "idAcctName";
				formDiv .appendChild(acctName);
// Input for Account BAlance
				let acctBal = document.createElement("input");
						acctBal.setAttribute("placeholder", "Initial Balance");
						acctBal.setAttribute("type", "number");
						acctBal.setAttribute("min", "0");
						acctBal.className = "formData";
						acctBal.id = "idAcctBal";
				formDiv.appendChild(acctBal);
				formDiv.appendChild(document.createElement("br"));
				// Buttobs Add and Cancel
				let addActBut = document.createElement("button");
						addActBut.className = "addAccount";
						// addActBut.id = "idaddCard";
						addActBut.textContent = "Add Account"
				let cancelActBut = document.createElement("button");
						cancelActBut.className = "del";
						cancelActBut.textContent = "Cancel"
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

			


	createCard: (acctName,acctBal) => {

		functions.counter++;
		// console.log("from createCard: Hello World");
		let div = document.createElement("div");
		div.setAttribute("count", functions.counter);
		div.className = "card";
		div.textContent = `Account ${functions.counter}`;
		let readOnlyAcctName = document.createElement("input"); 
				readOnlyAcctName .value = acctName;
				readOnlyAcctName .setAttribute ("readonly", true)
				div.appendChild(readOnlyAcctName);
		let readOnlyAcctBal = document.createElement("input"); 
				readOnlyAcctBal.value = acctBal;
				readOnlyAcctBal.setAttribute ("justified", "right");
				readOnlyAcctBal.setAttribute ("readonly", true);
				div.appendChild(readOnlyAcctBal);
		



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

	addAccount: (parentDiv,acctName, acctBal) => {
		console.log("addCard-Parent: ", parentDiv, acctName, acctBal);
		let displayAcctCard = functions.createCard(acctName, acctBal);
		parentDiv.appendChild(displayAcctCard);
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