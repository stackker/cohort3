const functions = {



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

			case "createWDr": {


				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
				formDiv.className = "card";
				formDiv.textContent = "Account";

				let acctNameHolder = document.createElement("input");
				acctNameHolder.id = "idWdrAcctName";
				acctNameHolder.setAttribute("readonly", true);
				acctNameHolder.value = acctName;
				formDiv.appendChild(acctNameHolder);


				let withDraw = document.createElement("input");
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

	postWithdraw: (acctNamein, acctWDraw) => {
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

	updateStatistics: (loctag, acctController) => {

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
	},

	//  -------Cities Functions------------

	createCityForm: (returnToID, buttonClickd, acctName) => {
		console.log("createForm.buttonClick: ", buttonClickd)


		switch (buttonClickd.className) {
			case "createCity": {

				// console.log("fromID Add: ", fromID)

				console.log("createForm.addCard case: ", buttonClickd);
				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
				formDiv.className = "card";
				// Input for Account Name
				let cityNamein = document.createElement("input");
				cityNamein.setAttribute("placeholder", "City Name");
				cityNamein.setAttribute("type", "text");
				cityNamein.setAttribute("required", "true");
				cityNamein.className = "formData";
				cityNamein.id = "idCityNamein";
				formDiv.appendChild(cityNamein);

				// Input for Population Opening  Balance
				let cityPop = document.createElement("input");
				cityPop.setAttribute("placeholder", "Population (Opening)");
				cityPop.setAttribute("type", "number");
				cityPop.setAttribute("min", "0");
				cityPop.className = "formData";
				cityPop.id = "idCityPop";
				formDiv.appendChild(cityPop);
				formDiv.appendChild(document.createElement("br"));

				// Input for Latitude and Longitude

				let cityLat = document.createElement("input");

				cityLat.setAttribute("placeholder", "Latitude");
				cityLat.setAttribute("type", "input");

				cityLat.setAttribute("min", -180.000);
				cityLat.setAttribute("max", 180.000);
				cityLat.className = "formData";
				cityLat.id = "idCityLat";
				formDiv.appendChild(cityLat);
				// formDiv.appendChild(document.createElement("br"));

				let cityLong = document.createElement("input");
				cityLong.setAttribute("placeholder", "Longitude");
				cityLong.setAttribute("type", "number");
				cityLong.setAttribute("min", -90.000);
				cityLong.setAttribute("max", 90.000);

				cityLong.className = "formData";
				cityLong.id = "idCityLong";
				formDiv.appendChild(cityLong);
				formDiv.appendChild(document.createElement("br"));


				// Buttons Add and Cancel
				let addDepBut = document.createElement("button");
				addDepBut.className = "addCity";
				// addDepBut.id = "idaddCard";
				addDepBut.textContent = "Add City"
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

			case "createWDr": {


				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
				formDiv.className = "card";
				formDiv.textContent = "Account";

				let acctNameHolder = document.createElement("input");
				acctNameHolder.id = "idWdrAcctName";
				acctNameHolder.setAttribute("readonly", true);
				acctNameHolder.value = acctName;
				formDiv.appendChild(acctNameHolder);


				let withDraw = document.createElement("input");
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

			default: { console.log("city:createForm.buttonClick: ", "NOT PROGRAMMED") }
		}
		return idInputForm;
	},

	createCityCard: (cityCard) => {

		// functions.counter++;
		// debugger;
		console.log("from createCard: ", cityCard);
		let div = document.createElement("div");
		div.setAttribute("count", cityCard.key);
		div.className = "card";
		div.textContent = `Key ${cityCard.key}`;
		let roCityName = document.createElement("input");
		roCityName.id = "idCN:" + cityCard.cityKey;
		roCityName.value = cityCard.city;
		roCityName.setAttribute("readonly", true)
		div.appendChild(roCityName);
		let roCityPop = document.createElement("input");
		roCityPop.value = cityCard.population;
		roCityPop.id = "idCP:" + cityCard.population;
		roCityPop.setAttribute("readonly", true);
		div.appendChild(roCityPop);

		let lBreak = document.createElement("br");
		div.appendChild(lBreak);


		//Create the buttons on the card
		const btnBefore = document.createElement('button');
		btnBefore.className = 'createDep';
		btnBefore.textContent = 'Depost';
		btnBefore.id = "idDp:" + cityCard.key;
		div.appendChild(btnBefore);


		const btnAfter = document.createElement('button');
		btnAfter.className = 'createWDr';
		btnAfter.textContent = 'Withdraw';
		btnAfter.id = "idWd:" + cityCard.key;
		div.appendChild(btnAfter);

		const delBtn = document.createElement('button');
		delBtn.className = 'del';
		delBtn.id = "idDL:" + cityCard.key;
		delBtn.textContent = 'Delete Account';

		div.appendChild(delBtn);

		return div;

	},

	addCity: (parentDiv, cityCard) => {
		// debugger;

		let displayAcctCard = functions.createCityCard(cityCard);
		parentDiv.appendChild(displayAcctCard);
		return functions.resultArray(parentDiv, "div", "count");
	},

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