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

	createForm: (returnToID, buttonClickd, acctName) => {
		console.log("createForm.buttonClick: ", buttonClickd)


		switch (buttonClickd.className) {
			case "createAccount": {

				// console.log("fromID Add: ", fromID)

				console.log("createForm.addCard case: ", buttonClickd);
				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
				formDiv.className = "card";
				// Input for Account Name
				let acctNamein = document.createElement("input");

						acctNamein.setAttribute("placeholder", "Account Name");
						acctNamein.setAttribute("type", "text");
						acctNamein.setAttribute("required", "true");
						acctNamein.className = "formData";
						acctNamein.id = "idAcctNamein";
				formDiv.appendChild(acctNamein);
				// Input for Account Balance
				let acctBal = document.createElement("input");
						acctBal.setAttribute("placeholder", "Initial Balance");
						acctBal.setAttribute("type", "number");
						acctBal.setAttribute("min", "0");
						acctBal.className = "formData";
						acctBal.id = "idAcctBal";
				formDiv.appendChild(acctBal);
				formDiv.appendChild(document.createElement("br"));
				// Buttons Add and Cancel
				let addDepBut = document.createElement("button");
						addDepBut.className = "addAccount";
						// addDepBut.id = "idaddCard";
						addDepBut.textContent = "Add Account"
				let cancelActBut = document.createElement("button");
						cancelActBut.className = "del";
						cancelActBut.textContent = "Cancel"
				formDiv.appendChild(addDepBut);
				// remove form if cancelled
				formDiv.appendChild(cancelActBut);
				returnToID.appendChild(formDiv);
				break;


			}
			
			case "createDep": {

				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
						formDiv.className = "card";
						formDiv.textContent = "Account";

				let acctNameHolder = document.createElement("input");
						acctNameHolder.id = "idDepAcctName";
						acctNameHolder.setAttribute("readonly", true);
						acctNameHolder.value = acctName;
				formDiv.appendChild(acctNameHolder);


				let deposit = document.createElement("input");
						deposit.id = "idInputDeposit"
						deposit.setAttribute("placeholder", "Enter Deposit Amount");
						deposit.setAttribute("type", "number");
						deposit.setAttribute("min", "0");
						deposit.setAttribute("required", "true");
						deposit.className = "formData";

				formDiv.appendChild(deposit);
				formDiv.appendChild(document.createElement("br"));

				// Buttons Add and Cancel
				let addDepBut = document.createElement("button");
						addDepBut.className = "addDeposit";
						addDepBut.textContent = "Add Deposit"

				let cancelBut = document.createElement("button");
						cancelBut.className = "del";
						cancelBut.textContent = "Cancel"

				formDiv.appendChild(addDepBut);
				formDiv.appendChild(cancelBut);

				idInputForm.appendChild(formDiv);
				break;
			}

			case "createWDr":{

				
				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
						formDiv.className = "card";
						formDiv.textContent = "Account";

				let acctNameHolder = document.createElement("input");
						acctNameHolder.id = "idWdrAcctName";
						acctNameHolder.setAttribute("readonly", true);
						acctNameHolder.value = acctName;
				formDiv.appendChild(acctNameHolder);


				let withDraw  = document.createElement("input");
						withDraw.id = "idInputWithdraw"
						withDraw.setAttribute("placeholder", "Enter Withdrawal Amount");
						withDraw.setAttribute("type", "number");
						withDraw.setAttribute("min", "0");
						withDraw.setAttribute("required", "true");
						withDraw.className = "formData";

				formDiv.appendChild(withDraw);
				formDiv.appendChild(document.createElement("br"));

				// Buttons Add and Cancel
				let addWDrBut = document.createElement("button");
						addWDrBut.className = "postWithdraw";
						addWDrBut.textContent = "Post Withdrawal"

				let cancelBut = document.createElement("button");
						cancelBut.className = "del";
						cancelBut.textContent = "Cancel"

				formDiv.appendChild(addWDrBut);
				formDiv.appendChild(cancelBut);

				idInputForm.appendChild(formDiv);
				break;

				

			}

			default: { console.log("createForm.buttonClick: ", "NOT PROGRAMMED") }
		}
		return idInputForm;
	},







	createCard: (acctNamein, acctBal) => {

		functions.counter++;
		// console.log("from createCard: Hello World");
		let div = document.createElement("div");
		div.setAttribute("count", functions.counter);
				div.className = "card";
				div.textContent = `Account ${functions.counter}`;
		let readOnlyAcctName = document.createElement("input");
				readOnlyAcctName.id = "idAN:" + acctNamein;
				readOnlyAcctName.value = acctNamein;
				readOnlyAcctName.setAttribute("readonly", true)
		div.appendChild(readOnlyAcctName);
		let readOnlyAcctBal = document.createElement("input");
				readOnlyAcctBal.value = acctBal;
				readOnlyAcctBal.id = "idAB:" + acctNamein;
				readOnlyAcctBal.setAttribute("readonly", true);
		div.appendChild(readOnlyAcctBal);

		let lBreak = document.createElement("br");
		div.appendChild(lBreak);


		//Create the buttons on the card
		const btnBefore = document.createElement('button');
					btnBefore.className = 'createDep';
					btnBefore.textContent = 'Depost';
					btnBefore.id = "idDp:" + acctNamein;
			div.appendChild(btnBefore);


		const btnAfter = document.createElement('button');
					btnAfter.className = 'createWDr';
					btnAfter.textContent = 'Withdraw';
					btnAfter.id = "idWd:" + acctNamein;
		div.appendChild(btnAfter);

		const delBtn = document.createElement('button');
					delBtn.className = 'del';
					delBtn.id = "idDL:" + acctNamein;
					delBtn.textContent = 'Delete Account';
					
		div.appendChild(delBtn);

		return div;

	},

	addAccount: (parentDiv, acctNamein, acctBal) => {
		console.log("addCard-Parent: ", parentDiv, acctNamein, acctBal);
		let displayAcctCard = functions.createCard(acctNamein, acctBal);
		parentDiv.appendChild(displayAcctCard);
		return functions.resultArray(parentDiv, "div", "count");
	},

	addDeposit: (acctNamein, acctDep) => {
		console.log("addDeposit: ", acctNamein, acctDep);
		let newAccountList = instAccountController.createDeposit(acctNamein, acctDep);
	},

	postWithdraw: (acctNamein, acctWDraw) =>{
		console.log("postWithDrawal: ", acctNamein, acctWDraw);
		let newAccountList = instAccountController.postWithdrawal(acctNamein, acctWDraw);
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

	updateStatistics: (loctag,acctController) =>{
		 
		let maxAccount = acctController.highestAccount();
		let minAccount = acctController.lowestAccount();
		let totBalance = acctController.totalAccounts();
		
				loctag.innerHTML = 
												`<p> The Total Balamce of Accounts:'$' ${totBalance}
												<p>The Account with the Highest Balance is : ${maxAccount.accName} / '$' ${maxAccount.bal}</p> 
												<p>The Account with the Lowest Balance is : ${minAccount.accName} / '$' ${minAccount.bal}</p>`;
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








const utils = {
	recoverAccName(eventTargetID) {
		//let str = eventTarget.id;
		return eventTargetID.slice(5);
	},

	recreateIDforBalance(account) {
		let balanceID = "idAB:" + account["accName"];
		return balanceID;
	}


};


export { utils, functions };