import React from "react";

class CityInputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.cityInfo = {};
  }

  makeObject = event => {
    this.cityInfo[event.target.name] = event.target.value;
    // console.log(this.cityInfo);
  };

  render() {
    return (
      this.props.screenNum === 1 && (
        <fieldset className="card">
          {/* <legend>City Information</legend> */}
          City Name :
          <input
            type="text"
            placeholder="City Name"
            id="idcityName"
            name="cityName"
            onBlur={this.makeObject}
          />
          {/* <br /> */}
          City Population:
          <input
            type="text"
            placeholder="Opening Balance"
            name="cityPop"
            onBlur={this.makeObject}
          />
          {/* <br /> */}
          Latitude :
          <input
            type="number"
            placeholder="Number"
            name="cityLat"
            onBlur={this.makeObject}
          />
          {/* <br /> */}
          Longitude :
          <input
            type="number"
            placeholder="Number"
            name="cityLong"
            onBlur={this.makeObject}
          />
          {/* <br /> */}
          <span>
            <button
              className="add"
              value="Add City"
              onClick={() => {
                this.props.addCityButn(this.cityInfo);
              }}
            >
              Add City
            </button>
            <button
              style={{ marginLeft: 40 }}
              className="del"
              onClick={this.props.cancelScreenButn}
            >
              Cancel
            </button>
          </span>
        </fieldset>
      )
    );
  }
}

export default CityInputScreen;
