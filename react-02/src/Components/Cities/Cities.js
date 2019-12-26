import React from "react";

import "./cities.css";

import CityInputScreen from "./Cityscreens.js";
import { City } from "./CityClass";
import { Community } from "./CityClass";

class CitiesData extends React.Component {
  constructor() {
    super();

    this.state = {
      serveScreenNum: 0,
      MetroData: new Community()
    };
  }
  addCityFn = () => {
    this.setState({ serveScreenNum: 0 });
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
              <p> {this.state.serveScreenNum}</p>
            </div>

            <div id="idDataPanel" className="rightPanel">
              <div id="idCityInputForm" className="clInputForm">
                <CityInputScreen
                  screenNum={this.state.serveScreenNum}
                  cancelScreenButn={() => {
                    this.cancelScreenFn();
                  }}
                  addCityButn={() => {
                    this.addCityFn();
                  }}
                />
              </div>

              <div id="idCityStatusPanel" className="bottomPanel">
                Status
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CitiesData;
