class City {
  constructor(cityKey, city, population, lat, long) {
    this.key = Number(cityKey);
    this.city = city;
    this.population = Number(population);
    this.lat = Number(lat);
    this.long = Number(long);
  }
  show() {
    return `${this.key},${this.city},${this.population},${this.lat},${this.long}`;
  }
  movedin(movedInVal) {
    if (Number(movedInVal) <= 0) {
      let error = "Moved In Numbers must be greater than Zero";
      alert(error);
      //consolelog(error);
      return this.population;
    } else {
      return (this.population += Number(movedInVal));
    }
  }

  movedOut(movedOutVal) {
    // debugger;
    if (Number(movedOutVal) <= 0) {
      let error = "Moved Out Numbers must be greater than Zero";
      alert(error);
      //consolelog(error);
      // throw (error);
      return this.population;
    } else {
      let originalpopulation = this.population;
      this.population -= Number(movedOutVal);

      if (this.population < 0) {
        // alert(`Residents remaining cannot be less than Zero. Balance: ${this.population}`);
        let error = "Balance cannot not be less than 0";
        alert(error);
        //consolelog(error);
        this.population = originalpopulation; // restore previous state
        // throw (error)
        return this.population;
      } else {
        return this.population;
      }
    }
  }

  howBig() {
    let pop = this.population;
    if (pop >= 0 && pop <= 100) {
      return "Hamlet";
    } else if (pop > 100 && pop < 1000) {
      return "Village";
    } else if (pop >= 1000 && pop < 20000) {
      return "Town";
    } else if (pop >= 20000 && pop < 100000) {
      return "Large Town";
    } else {
      return "City";
    }
  }

  whichSphere() {
    return parseFloat(this.lat) >= 0 ? "Northern" : "Southern";
  }
}

class Community {
  constructor() {
    this.cityData = [];
    this.cityKey = Number(this.cityData.cityKey);
  }

  postDeposit(key, changeQty) {
    let postedCity;

    for (let eachCity of this.cityData) {
      //consolelog("inCreateDep Meth:", eachCity);
      //consolelog("inCreateDep inputs :", key, changeQty);
      // debugger;
      if (key === eachCity.key) {
        //consolelog("inCreateDep Meth:", true);
        eachCity.movedin(Number(changeQty));
        postedCity = eachCity;
        break;
      }
      //consolelog("inCreateDep Meth:", postedCity);
    }
    return this.cityData;
  }

  postWithdrawal(key, changeQty) {
    let postedCity;
    for (let eachCity of this.cityData) {
      // //consolelog("inCreateDep Meth:", key, changeQty);
      // debugger;
      if (key === eachCity.key) {
        // console.log("in postWithdrawal Meth:", "Key found");
        eachCity.movedOut(Number(changeQty));
        postedCity = eachCity;
        break;
      }
      //consolelog("inCreateDep Meth:", postedCity);
    }
    return this.cityData;
  }

  createCity(cityKey, cityName, cityLat, cityLong, cityPop) {
    // console.log("from method createCity");
    let ACity = new City(cityKey, cityName, cityPop, cityLat, cityLong);
    this.cityData.push(ACity);
    this.cityKey = cityKey; // added for react  code. else  the key is not allocated
    return this.cityData;
  }

  deleteCity(cityKey) {
    this.cityData = this.cityData.filter(City => {
      // console.log("City.key:", City.key, "cityKey: ", cityKey);
      return City.key !== cityKey;
    });
    // console.log("Instance :", this.cityData);
    return this.cityData;
  }

  getPopulation() {
    return this.cityData.reduce((acc, City) => acc + City.population, 0);
  }

  getMostSouthern() {
    // /Sort Latitude ascending
    let tempCityData = Array.from(this.cityData);
    let sortResults = tempCityData.sort(
      (a, b) => parseFloat(Number(a.lat)) - parseFloat(Number(b.lat))
    );
    return sortResults[0];
  }

  getMostNorthern() {
    // /Sort Latitude descending

    // the original array gets sorted resulting in cities listing in southern descending as it isthe last sorted sequence. Hence deep copied to temp var.
    let tempCityData = Array.from(this.cityData);

    let sortResults = tempCityData.sort(
      (a, b) => parseFloat(Number(b.lat)) - parseFloat(Number(a.lat))
    );
    // let sortCity = sortResults[0];
    return sortResults[0];
  }

  whichSphere1(key) {
    debugger;
    let myCity = this.cityData.filter(city => {
      return city.key === key;
    });
    //[0] as it is always a one element array
    return parseFloat(myCity[0].long) >= 0 ? "Northern" : "Southern";
  }

  getCityInfo(cityKey) {
    // no need for return statement when {} not used
    return this.cityData.filter(city => Number(city.key) === Number(cityKey));
  }
}

export { City, Community };
