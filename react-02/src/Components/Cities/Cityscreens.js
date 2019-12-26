import React from "react";

class CityInputScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.screenNum === 1 && (
        <fieldset className="card">
          <legend>City Information</legend>
          City Name :
          <input type="text" placeholder="City Name" name="cityName" value="" />
          <br />
          City Population:
          <input type="text" placeholder="Opening Balance" name="cityPop" />
          <br />
          Latitude :
          <input type="number" placeholder="Number" name="cityLat" /> <br />
          Longitude :
          <input type="number" placeholder="Number" name="cityLong" />
          <br />
          <button
            className="add"
            onClick={() => {
              
              this.props.addCityButn();
            }}
          >
            Add City
          </button>
          <button className="del" onClick={this.props.cancelScreenButn}>
            Cancel
          </button>
        </fieldset>
      )
    );
  }
}

export default CityInputScreen;
