import React from "react";
import Button from "react-bootstrap/Button";

class CitiesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: ""
    };
  }

  render() {
    console.log("CDisplay-MetroData: ", this.props.MetroData);

    return (
      // if there are entries in the Community Instance , Display it.

      this.props.MetroData.length !== 0 && (
        <section>
          <table id="slab1">
            <thead>
              <tr>
                <th>City Key </th>
                <th>City Name</th>
                <th>Population </th>
                <th>City Type </th>
                <th>Latitude </th>
                <th>Longitude </th>
                <th>Input Change </th>
                <th>Moved Ins </th>
                <th>Moved Outs</th>
                <th>Delete City</th>
                <th>Hemisphere</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log("tbody", this.props.MetroData, this.MetroDataInst)} */}
              {this.props.MetroData.map((city, index) => {
                return (
                  /*  The items should be seperate component as they need to be selected */
                  /*  it seems city  = city  can be written as city, as per ES4 standards  */
                  <CitiesDisplayItems
                    key={city.key}
                    city={city}
                    index={index}
                    entry={this.state.entry}
                    butnState={this.state.butnState}
                    butnChange={this.setButnState}
                    setEntryState={event => {
                      this.setState({ entry: event.target.value });
                      event.target.value = ""; //Need to find better way to clear field as the data can dissappear if we click anywhere other than the Movedin
                    }}
                    movedInFn={() => {
                      this.props.setNewPopulationIn(city.key, this.state.entry);
                      console.log(city.key, this.state.entry);

                      this.setState({ entry: "" }); //Cleared so that the next click will not add again on this or other lines
                    }}
                    movedOutFn={() => {
                      this.props.setNewPopulationOut(
                        city.key,
                        this.state.entry
                      );
                      console.log(city.key, this.state.entry);
                      this.setState({ entry: "" }); //Cleared so that the next click will not remove again on this or other lines
                    }}
                    deleteCityBut={() => {
                      this.props.deleteCityFn(city.key);
                    }}
                    whichSphere={() => {
                      this.props.whichSphere(city.key);
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      )
    );
  }
}

class CitiesDisplayItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // entry: "",
      butnState: true
    };
  }
  setButnState = event => {
    console.log("setButnState :", this.state.entry);

    if (event.target.value !== "") {
      // debugger;
      console.log("setButn:ET: ", this.state.entry);
      return this.setState({ butnState: false }); // disabled = true
    }
  };

  createMoveIn = event => {
    console.log("createMoveIn:", event.nativeEvent);
    this.setState({ butnState: true });
    this.props.movedInFn();
  };

  createMoveOut = event => {
    this.setState({ butnState: true });
    this.props.movedOutFn();
  };

  render() {
    console.log("CDisplayItems-butnState: ", this.props.butnState);
    return (
      <tr key>
        <td>{this.props.city.key}</td>
        <td> {this.props.city.city}</td>
        <td>{this.props.city.population.toString()}</td>
        <td>{this.props.city.howBig()}</td>
        <td>{this.props.city.lat.toString()}</td>
        <td>{this.props.city.long.toString()}</td>
        {/* NaN children Warning if not Stringed??  */}
        <td>
          <input
            type="number"
            placeholder=" Only (+)numbers"
            min={1}
            name="entry"
            // ref={this.entry}
            onBlur={this.props.setEntryState}
            onChange={this.setButnState}
          />
        </td>
        <td>
          <Button
            variant="primary"
            size="sm"
            disabled={this.state.butnState}
            onClick={this.createMoveIn}
          >
            Mvd In
          </Button>
        </td>
        <td>
          <Button
            variant="secondary"
            size="sm"
            // disabled={true}
            disabled={this.state.butnState}
            onClick={this.createMoveOut}
          >
            Mvd Out
          </Button>
        </td>
        <td>
          <button onClick={this.props.deleteCityBut}>Delete</button>
        </td>
        <td>{this.props.city.whichSphere()}</td>
      </tr>
    );
  }
}
export default CitiesDisplay;
