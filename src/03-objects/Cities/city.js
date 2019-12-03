class City {
	constructor(cityKey, city,  population, lat, long) {
		this.key = Number(cityKey);
		this.city = city;
		this.population = Number(population);
		this.lat = Number(lat);
		this.long = Number(long);
		
	}
	show() {
		return `${this.city}, ${this.lat}, ${this.long}, ${this.population}`;
	}
	movedin(movedInVal) {
		return this.population += Number(movedInVal);
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
		this.cityKey = Number(this.cityData.cityKey);
	}
	postDeposit(accName, depAmount) {
		let postedAccount;
	
		for (let account of this.cityData) {
			// console.log("inCreateDep Meth:", this.accountList);
			// debugger;
			if (accName === account.city) {
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
			if (accName === account.city) {
				console.log("in postWithdrawal Meth:", true);
				account.movedOut  (Number(withdrawAmount));
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
			return City.city !== cityName;
		})
		return this.cityData;
	}

	getPopulation() {
		return this.cityData.reduce(((acc, City) => acc + City.population), 0);
	}

	getMostSouthern() {

		let sortResults = this.cityData.sort((a, b) => parseFloat(a.long) - parseFloat(b.long));
		return sortResults[0];
	}

	getMostNorthern() {

		let sortResults = this.cityData.sort((a, b) => parseFloat(b.long) - parseFloat(a.long));
		return sortResults[0];
	}

	whichSphere(key) {
		debugger;
		let myCity = this.cityData.filter((city) => {
			return city.key === key
		})
		//[0] as it is always a one element array
		return (parseFloat(myCity[0].long) >= 0) ? "Northern Hemisphere" : "Southern Hemisphere";
	}

	getCityInfo(cityKey) {
		// no need for return statement when {} not used
		return this.cityData.filter((city) => Number(city.key) === Number(cityKey));

	}


}






















export { City, Community };