import React from "react";

import "./cities.css";

import CityInputScreen from "./Cityscreens.js";
import CitiesDisplay from "./CitiesDisplay.js";
import { City, Community } from "./CityClass";
import * as server from "./servCom.js";
import Spinner from "react-bootstrap/Spinner";

class CitiesData extends React.Component {
  constructor() {
    super();
    this.cityKey = null;
    this.MetroDataInst = new Community();
    this.City = new City(); //Dummy creation

    this.state = {
      serveScreenNum: 0,
      // this.MetroDataInst = new Community();
      MetroDataState: this.MetroDataInst.cityData,
      serverSync: true,
      spinState: false
    };
  }
  addCityFn = async cityInfo => {
    console.log(this.MetroDataInst);
    console.log("CKey", cityInfo, this.MetroDataInst.cityKey);
    if (isNaN(this.MetroDataInst.cityKey)) {
      //If Data exists on Server it is not NaN;
      this.cityKey = 0;
    } else {
      this.cityKey = this.MetroDataInst.cityKey;
    }

    this.cityKey += 1;

    let { cityName, cityLat, cityLong, cityPop } = cityInfo;

    console.log(cityName, cityLat, cityLong, cityPop, this.cityKey);
    // createCity adds the city to the MetroDataInst of community
    let key = this.cityKey; // server API needs it explicitly to be named key

    const metroDataCopy = this.MetroDataInst.createCity(
      key,
      cityName,
      cityLat,
      cityLong,
      cityPop
    );
    let cityinfo = {
      key: key,
      city: cityName,
      lat: cityLat,
      long: cityLong,
      population: cityPop
    };
    if (this.state.serverSync === true) {
      await server.createServCity(cityinfo);
    }

    this.setState({
      MetroDataState: metroDataCopy,
      serveScreenNum: 0
    });

    // this.setState({ serveScreenNum: 0 });
  };

  componentDidMount = async () => {
    // Sync Server Data into state
    //  "idcreateCity" has no relevance except that it was used for JS based development
    // debugger;
    this.setState({ spinState: true });
    // let MetroDataInstCopy;

    if (this.state.serverSync === true) {
      try {
        let syncData = await server.syncServerCities(
          "idcreateCity",
          this.MetroDataInst
        );
        // debugger;
        if (syncData.status !== 200) {
          throw "Server Status :" + syncData.status;
        }
      } catch (error) {
        alert("Server not Responding. Refresh to Reload \n" + error);
        this.setState({ serverSync: false }); //To be removed after the await is fulfilled
        // console.log("After server Sync: ", syncData);
      }
    }
    this.setState({ spinState: false });

    if (!this.MetroDataInst.cityData) {
      this.setState({
        MetroDataState: this.MetroDataInst.cityData,
        serveScreenNum: 1
      });
    }
  };

  setSpinnerState = spinState => {
    if (spinState) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  };

  cancelScreenFn = () => {
    this.setState({ serveScreenNum: 0 });
  };

  createCityScreen = num => {
    // debugger;
    this.setState({ serveScreenNum: num });

    // console.log("createCityScreen", this.state.serveScreenNum);
  };

  renderStats = () => {
    if (this.MetroDataInst.cityData.length !== 0) {
      return (
        <div>
          <p>
            Total Population:
            {this.MetroDataInst.getPopulation()}
          </p>
          <p>Most Northern City: {this.MetroDataInst.getMostNorthern().city}</p>
          <p>Most Southern City: {this.MetroDataInst.getMostSouthern().city}</p>
        </div>
      );
    }
  };

  render() {
    console.log("createCityScreen render", this.state.MetroDataState);
    return (
      <div>
        <section id="idMetroSec" className="MetroData">
          <h1> Metro Data </h1>

          <div id="idCityContainer">
            <div id="idCityPanel" className="leftPanel">
              Cities
              <button
                className="createCity"
                id="idcreateCity"
                onClick={() => {
                  this.createCityScreen(1);
                }}
              >
                Create City
              </button>
              <div>
                {this.setSpinnerState(this.state.spinState)}
                <CitiesDisplay
                  MetroData={this.state.MetroDataState}
                  setNewPopulationIn={async (cityKey, movedQty) => {
                    this.City = this.MetroDataInst.getCityInfo(cityKey)[0];
                    this.City.population = this.City.movedin(movedQty);
                    if (this.state.serverSync === true) {
                      await server.updateServCity(this.City);
                    }

                    this.setState({
                      MetroDataState: this.MetroDataInst.cityData,
                      entry: ""
                    });
                  }}
                  setNewPopulationOut={async (cityKey, movedQty) => {
                    this.City = this.MetroDataInst.getCityInfo(cityKey)[0];
                    this.City.population = this.City.movedOut(movedQty);
                    if (this.state.serverSync === true) {
                      await server.updateServCity(this.City);
                      console.log("Citypop: ", this.City.population);
                    }

                    this.setState({
                      MetroDataState: this.MetroDataInst.cityData,
                      entry: ""
                    });
                  }}
                  deleteCityFn={async cityKey => {
                    if (this.state.serverSync === true) {
                      this.setState({ spinState: true });
                      await server.deleteServCity(cityKey);
                      this.setState({
                        spinState: false
                      });
                    }
                    this.setState({
                      // MetroDataState: this.MetroDataInst.cityData
                      MetroDataState: this.MetroDataInst.deleteCity(cityKey)
                    });
                  }}
                />
              </div>
            </div>

            <div id="idDataPanel" className="rightPanel">
              <div id="idCityInputForm">
                {/* <div id="idCityInputForm" 
              className="clInputForm"> */}
                <CityInputScreen
                  screenNum={this.state.serveScreenNum}
                  cancelScreenButn={() => {
                    this.cancelScreenFn();
                  }}
                  addCityButn={cityInfo => {
                    this.addCityFn(cityInfo);
                  }}
                />
              </div>

              <div id="idCityStatusPanel" className="bottomPanel">
                Status
                {/* <p> Screen:{this.state.serveScreenNum}</p> */}
                {this.renderStats()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CitiesData;
