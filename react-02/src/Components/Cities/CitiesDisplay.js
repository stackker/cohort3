import React from "react";

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
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
            name="entry"
            // ref={this.entry}
            onBlur={this.props.setEntryState}
          />
        </td>
        <td>
          <button onClick={this.props.movedInFn}>Mvd In</button>
        </td>
        <td>
          <button onClick={this.props.movedOutFn}>Mvd Out</button>
        </td>
        <td>
          <button
            onClick={this.props.deleteCityBut}
            // this.props.deleteCityBut(this.props.city.key);
            // }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default CitiesDisplay;
