class City {
	constructor(cityKey, aname,  population, latitude, longitude) {
		this.key = Number(cityKey);
		this.aname = aname;
		this.population = Number(population);
		this.latitude = Number(latitude);
		this.longitude = Number(longitude);
		
	}
	show() {
		return `${this.aname}, ${this.latitude}, ${this.longitude}, ${this.population}`;
	}
	movedin(movedInVal) {
		return this.population += movedInVal;
	}

	movedOut(movedOutVal) {
		debugger;
		if (Number(movedOutVal) <= 0) {
			let error = "Moved Out Numbers must be Zero or greater";
			console.log(error);
			// throw (error);
			return this.population
		}

		else {

			let originalpopulation = this.population;
			this.population -= Number(movedOutVal);
			if (this.population < 0) {
				// alert(`Residents remaining cannot be less than Zero. Balance: ${this.population}`);
				let error = "Balance must be greater than 0";
				console.log(error);
				this.population = originalpopulation;
				// throw (error)
				return this.population;
			} else {
				return this.population;
			}

		}

	}

	howBig() {
		let pop = this.population;
		if ((pop >= 1) && (pop <= 100)) {
			return "Hamlet";
		} else if ((pop > 100) && (pop < 1000)) {
			return "Village";
		} else if ((pop >= 1000) && (pop < 20000)) {
			return "Town";
		} else if ((pop >= 20000) && (pop < 100000)) {
			return "Large Town";
		} else {
			return "City";
		}
	}
}

class Community {
	constructor() {
		this.cityData = [];
		this.cityKey = Number(this.cityKey);
	}
	postDeposit(accName, depAmount) {
		let postedAccount;
	
		for (let account of this.cityData) {
			// console.log("inCreateDep Meth:", this.accountList);
			// debugger;
			if (accName === account.aname) {
				console.log("inCreateDep Meth:", true);
				account.movedin(Number(depAmount));
				postedAccount = account;
				break;

			};
			console.log("inCreateDep Meth:", postedAccount);
		}
		return postedAccount;
	}

	postWithdrawal(accName, withdrawAmount) {
		let postedAccount;
		for (let account of this.cityData) {
			// console.log("inCreateDep Meth:", this.accountList);
			// debugger;
			if (accName === account.aname) {
				console.log("in postWithdrawal Meth:", true);
				account.movedOut(Number(withdrawAmount));
				postedAccount = account;
				break;
			};
			console.log("inCreateDep Meth:", postedAccount);
		}
		return postedAccount;

	}



	createCity(cityKey, cityName, cityLat, cityLong, citypop) {
		let ACity = new City(cityKey, cityName, cityLat, cityLong, citypop);
		this.cityData.push(ACity);
		return this.cityData;
	}

	deleteCity(cityName) {
		this.cityData = this.cityData.filter(City => {
			return City.aname !== cityName;
		})
		return this.cityData;
	}

	getPopulation() {
		return this.cityData.reduce(((acc, City) => acc + City.population), 0);
	}

	getMostSouthern() {

		let sortResults = this.cityData.sort((a, b) => parseFloat(a.longitude) - parseFloat(b.longitude));
		return sortResults[0];
	}

	getMostNorthern() {

		let sortResults = this.cityData.sort((a, b) => parseFloat(b.longitude) - parseFloat(a.longitude));
		return sortResults[0];
	}

	whichSphere(key) {
		debugger;
		let myCity = this.cityData.filter((city) => {
			return city.key === key
		})
		//[0] as it is always a one element array
		return (parseFloat(myCity[0].longitude) >= 0) ? "Northern Hemisphere" : "Southern Hemisphere";
	}


}






















export { City, Community };