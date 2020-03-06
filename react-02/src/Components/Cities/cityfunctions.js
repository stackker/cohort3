import { City, Community } from "./CityClass.js/index.js";

const cfunctions = {


	//  -------Cities Functions------------


	createCityForm: (returnToID, buttonClickd, acctName) => {
		console.log("createForm.buttonClick: ", buttonClickd)

		// Need to keep it seperate as number of input fields are different
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

			case "createIns": {

				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
				formDiv.className = "card";
				formDiv.textContent = `Key: ${acctName.key},"City"`;
				formDiv.setAttribute("key", acctName.key);


				let acctNameHolder = document.createElement("input");
				acctNameHolder.id = "idDepAcctName";
				acctNameHolder.setAttribute("readonly", true);
				acctNameHolder.value = acctName.city;
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
				addDepBut.className = "addMoveIns";
				addDepBut.id = `idMI:${acctName.key}`;
				addDepBut.textContent = "Add MovedIns"

				let cancelBut = document.createElement("button");
				cancelBut.className = "del";
				cancelBut.textContent = "Cancel"

				formDiv.appendChild(addDepBut);
				formDiv.appendChild(cancelBut);

				idCityInputForm.appendChild(formDiv);
				break;
			}

			case "createOut": {


				//Create a Div to hold contents of the form
				let formDiv = document.createElement("form");
						formDiv.className = "card";
						formDiv.textContent = `Key: ${acctName.key},"City"`;
				formDiv.setAttribute("key", acctName.key);

				let acctNameHolder = document.createElement("input");
						acctNameHolder.id = "idWdrAcctName";
						acctNameHolder.setAttribute("readonly", true);
						acctNameHolder.value = acctName.city;
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
						addWDrBut.id = `idMO:${acctName.key}`;
						addWDrBut.textContent = "Post MovedOut"

				let cancelBut = document.createElement("button");
						cancelBut.className = "del";
						cancelBut.textContent = "Cancel"

				formDiv.appendChild(addWDrBut);
				formDiv.appendChild(cancelBut);

				idCityInputForm.appendChild(formDiv);
				break;
			}
			default: { console.log("city:createForm.buttonClick: ", "NOT PROGRAMMED") }
		}
		// return idInputForm;
	},





	createCityCard: (cityCard) => {

		// functions.counter++;
		// debugger;
		let lat = cityCard.lat;
		let long = cityCard.long;
		let cType = cityCard.howBig();
		let cText = ` Lat: ${lat}, Long: ${long}, Type: ${cType}`;

		console.log("from createCard: ", cityCard);
		let div = document.createElement("div");
		div.setAttribute("count", cityCard.key);
		div.className = "card";
		div.textContent = `Key ${cityCard.key}` + cText;
		let roCityName = document.createElement("input");
		roCityName.id = "idAN:" + cityCard.city;
		roCityName.value = cityCard.city;
		roCityName.setAttribute("readonly", true)
		div.appendChild(roCityName);
		let roCityPop = document.createElement("input");
		roCityPop.value = cityCard.population;
		roCityPop.id = "idAB:" + cityCard.city;
		roCityPop.setAttribute("readonly", true);
		div.appendChild(roCityPop);

		let lBreak = document.createElement("br");
		div.appendChild(lBreak);


		//Create the buttons on the card
		const btnBefore = document.createElement('button');
		btnBefore.className = 'createIns';
		btnBefore.textContent = 'Create MovedIns';
		btnBefore.id = "idDp:" + cityCard.key;
		div.appendChild(btnBefore);


		const btnAfter = document.createElement('button');
		btnAfter.className = 'createOut';
		btnAfter.textContent = 'Create MovedOuts';
		btnAfter.id = "idWd:" + cityCard.key;
		div.appendChild(btnAfter);

		const delBtn = document.createElement('button');
		delBtn.className = 'del';
		delBtn.id = "idDL:" + cityCard.key;
		delBtn.textContent = 'Delete City';

		div.appendChild(delBtn);



		return div;

	},

	addCity: (parentDiv, cityCard) => {
		

		let displayAcctCard = cfunctions.createCityCard(cityCard);
		parentDiv.appendChild(displayAcctCard);
		return cfunctions.resultArray(parentDiv, "div", "count");
	},

	delCard: (parentCard, parentDiv) => {
		// console.log("delCard parentDiv", parentDiv);

		parentCard.remove();
		return cfunctions.resultArray(parentDiv, "div", "count");
	},

	updateStatistics: (loctag, MetroDataInst) => {

		let maxPop = MetroDataInst.getMostNorthern();
		let minPop = MetroDataInst.getMostSouthern();
		let totPop = MetroDataInst.getPopulation();

		loctag.innerHTML =
			`<p> The Total Population: ${totPop}
												<p>The Northern most city  is : ${maxPop.city} /  ${maxPop.population}</p> 
												<p>The Southern most city is : ${minPop.city} /  ${minPop.population}</p>`;
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

};








const cutils = {
	recoverAccName(eventTargetID, cityData) {
		debugger;
		//let str = eventTarget.id;
		console.log(eventTargetID);
		let key = eventTargetID.slice(5);
		console.log("key: ", key, key.length);
		let city1 = cityData.filter(function (city) {
			console.log(city.key);
			return Number(city.key) === Number(key);
		});
		console.log(city1);
		return city1[0];
	},

	recreateIDforBalance(city) {
		let balanceID = "idAB:" + city["city"];
		return balanceID;
	}


};


export { cutils, cfunctions };