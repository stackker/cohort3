import React from "react";

import "./cities.css";

import CityInputScreen from "./Cityscreens.js";
import CitiesDisplay from "./CitiesDisplay.js";
import { City, Community } from "./CityClass";
import * as server from "./servCom.js"

class CitiesData extends React.Component {
  constructor() {
    super();
    this.cityKey = null;

    this.state = {
      serveScreenNum: 0,
      MetroDataInst: new Community(),
      City: new City()
    };
  }
  addCityFn = cityInfo => {
    console.log(this.state.MetroDataInst);
    console.log(cityInfo);
    if (isNaN(this.state.MetroDataInst.cityKey)) {
      //If Data exists on Server it is not NaN;
      this.cityKey = 0;
    }

    this.cityKey += 1;

    let { cityLat, cityLong, cityName, cityPop } = cityInfo;

    console.log(cityName, cityLat, cityLong, cityPop, this.cityKey);
    // createCity adds the city to the MetroDataInst of community
    this.setState(
      this.state.MetroDataInst.createCity(
        this.cityKey,
        cityName,
        cityLat,
        cityLong,
        cityPop
      )
    );

    // this.setState({ serveScreenNum: 0 });
  };

  cancelScreenFn = () => {
    this.setState({ serveScreenNum: 0 });
  };

  createCityScreen = num => {
    // debugger;
    this.setState({ serveScreenNum: num });

    // console.log("createCityScreen", this.state.serveScreenNum);
  };

  render() {
    // console.log("createCityScreen render", this.state.serveScreenNum);
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
                <CitiesDisplay
                  MetroData={this.state.MetroDataInst}
                  setNewPopulationIn={(cityKey, movedQty) => {
                    this.setState(
                      this.state.MetroDataInst.postDeposit(cityKey, movedQty)
                    );
                  }}
                  setNewPopulationOut={(cityKey, movedQty) => {
                    this.setState(
                      this.state.MetroDataInst.postWithdrawal(cityKey, movedQty)
                    );
                  }}
                  deleteCityFn={cityKey => {
                    this.setState(this.state.MetroDataInst.deleteCity(cityKey));
                  }}
                />
              </div>
            </div>

            <div id="idDataPanel" className="rightPanel">
              <div id="idCityInputForm" className="clInputForm">
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
                <p> Screen:{this.state.serveScreenNum}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CitiesData;
