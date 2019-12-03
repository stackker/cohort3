import { cutils, cfunctions } from '../Cities/cityfunctions.js';
// import { Accounts, AccountController } from "/accounts.js";
import { City, Community } from "./city.js";
import *  as server from "./servCom.js";

// Instanitate City & Metro Data
const MetroDataInst = new Community();

window.addEventListener('load', async (event) => {
	// Sync Server data to WebApp
	// debugger;
	let syncData = await server.syncServerCities(idCityPanel, MetroDataInst);
	console.log("new test");
	console.log(syncData.cityKey);

	console.log("cityData: ", syncData, MetroDataInst);


})

console.log("Controller Content:", MetroDataInst);
// event made async to prevent runaway fns.
idMetroSec.addEventListener("click", async (event) => {
	event.preventDefault();

	// console.log("Ex2Click:", event.target);
	let idLeftClick = event.target.id;
	console.log("leftClick:", idLeftClick);

	let elClicked = event.target;
	let parentposition = elClicked.parentElement;
	let grandparent = parentposition.parentElement;

	switch (elClicked.className) {

		case "createCity": {
			console.log("in CreateAccount Case :", event.target);
			const newCard = cfunctions.createCityForm(idCityInputForm, event.target);
			break;
		}
		case "addCity": {

			debugger;
			console.log(MetroDataInst);
			if (isNaN(MetroDataInst.cityKey)) { //If Data exists on Server it is not NaN;
				MetroDataInst.cityKey = 0;
			};

			MetroDataInst.cityKey += 1;
			let cityCard = new City(MetroDataInst.cityKey,
				idCityNamein.value,
				idCityPop.value,
				idCityLat.value,
				idCityLong.value);
			console.log("inaddCityCase :", event.target, idCityNamein.value);
			// const metroCity = MetroDataInst.createCity(
			// 	MetroDataInst.cityKey,
			// 	idCityNamein.value,
			// 	idCityPop.value,
			// 	idCityLat.value,
			// 	idCityLong.value);

			console.log("inaddCity Case :", MetroDataInst.cityData);

			// Delete the input form after updating accountList thro instAccountController.
			debugger;
			try {


				const fetchAdd = server.createServCity(cityCard);
				// throw (error);


				let panelId = idCityPanel;
				const newCard = cfunctions.addCity(panelId, cityCard);
				const varDelCard = cfunctions.delCard(parentposition, grandparent);
				// const messageid = idMessage;
				let statistics1 = cfunctions.updateStatistics(idCityStatusPanel, MetroDataInst)
				break;

			}
			catch (error) {
				alert(error, "Server Down");
			}

		}

		case "createIns": {
			//console.log("addBef Case :", event.target.parentElement.);

			let cityCard = cutils.recoverAccName(event.target.id, MetroDataInst.cityData)
			// let acctName = idAcctName.value;  
			const newCard = cfunctions.createCityForm(parentposition, event.target, cityCard) // idInputForm)
			break;
		}
		case "addMoveIns": {
		
			let cardKey = Number((cutils.recoverAccName(event.target.id, MetroDataInst.cityData).key));
			console.log("cardKey", cardKey);
			let depAccount = idDepAcctName.value;
			let depAmount = Number(idInputDeposit.value);

			//Need to pass all city info for the update
			
			let c = (MetroDataInst.getCityInfo(cardKey))[0];
			// create a temp city to use 
			console.log("tempCity  c ", c);
			let tempCity = new City(c.key, c.city, c.population, c.lat, c.long);
			// calculate updated population
			let currentPop = tempCity.movedin(depAmount);
			tempCity.population = currentPop;
			console.log("tempCity updated ", tempCity);

			// try {
				
				let updateServerData = await server.updateServCity(tempCity)
				let postedAccount = MetroDataInst.postDeposit(depAccount, depAmount);
				console.log("inaddDeposit Case :", postedAccount, MetroDataInst.cityData);

				let postBalanceID = cutils.recreateIDforBalance(postedAccount);
				console.log("addDeposit amt Case :", postBalanceID);
				// parentposition = postBalanceID.parentElement;
				// console.log("parentposition: assDeposit Case :", parentposition);
				document.getElementById(postBalanceID).value = postedAccount.population;

				const varDelCard = cfunctions.delCard(parentposition, grandparent);
				let statistics1 = cfunctions.updateStatistics(idCityStatusPanel, MetroDataInst);
				break;
			// }
			// catch(error){
			// 	console.log(error)
			// 	break;
			// }
		}
				
				

		case "createOut": {
			// debugger;

			let acctName = cutils.recoverAccName(event.target.id, MetroDataInst.cityData)
			// let acctName = idAcctName.value;  
			const newCard = cfunctions.createCityForm(parentposition, event.target, acctName) // idInputForm)
			break;

		}
		case "postWithdraw": {
			// alert("posting Withdrawal");
			let cardKey = Number((cutils.recoverAccName(event.target.id, MetroDataInst.cityData).key));
			console.log("cardKey", cardKey);
			let WdrawAccount = idWdrAcctName.value,
				WdrawAmount = idInputWithdraw.value;

				//Need to pass all city info for the update
				
				let c = (MetroDataInst.getCityInfo(cardKey))[0];
				// create a temp city to use 
				console.log("tempCity  c ", c);
				let tempCity = new City(c.key, c.city, c.population, c.lat, c.long);
				// calculate updated population
				let currentPop = tempCity.movedOut(WdrawAmount);
				tempCity.population = currentPop;
				console.log("tempCity updated ", tempCity);
	
				// try {

 // use the same fn to update server as movedIns
				
			let updateServerData = await server.updateServCity(tempCity)
			let postedAccount = MetroDataInst.postWithdrawal(WdrawAccount, WdrawAmount);
			console.log("inpostWithdraw Case :", postedAccount, MetroDataInst.cityData);
			let postBalanceID = cutils.recreateIDforBalance(postedAccount);
			console.log("inpostWithdraw amt Case :", postBalanceID);
			document.getElementById(postBalanceID).value = postedAccount.population;

			const varDelCard = cfunctions.delCard(parentposition, grandparent);
			let statistics1 = cfunctions.updateStatistics(idCityStatusPanel, MetroDataInst);
			break;
		}

		case "del": {
			console.log("inDel :", event.target.parentElement);
			let parentposition = elClicked.parentElement;
			let grandparent = parentposition.parentElement;
			if (elClicked.id.slice(0, 5) == "idDL:") {
				console.log("inDel  is deleteAccount :", true);
				let acctName = cutils.recoverAccName(event.target.id);
				let newAcctList = MetroDataInst.removeAccount(cityName);
				let statistics1 = cfunctions.updateStatistics(idCityStatusPanel, MetroDataInst);
				console.log("in del afterDelete", newAcctList);
			}



			const newCard = cfunctions.delCard(parentposition, grandparent);
			//console.log("in del newCard",newCard);
			break;
		}

		default: {
			console.log("Not Programmed for :", event.target);
			break;
		}
	}


});


