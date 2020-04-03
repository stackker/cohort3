import React from "react";


class CityInputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.cityInfo = {};
    this.cityNameRef = React.createRef();
    this.cityPopRef = React.createRef();
    this.cityLatRef = React.createRef();
    this.cityLongRef = React.createRef();
  }

  makeObject = event => {
    this.cityInfo[event.target.name] = event.target.value;
    // console.log(this.cityInfo);
  };
  
  randomInterval = (low, high) =>{
    return  Math.floor(Math.random()*(high - low + 1)) + low
  }

  generate_random_city = () =>{
    let cityRandom = [
      'Madrid', 'Hamburg', 'St.Tropez', 'Paris',
      'Brisbane', 'Tahiti', 'Warsaw', 'Bora Bora',
      'Fortaleza', 'Phuket', 'Barcelona', 'Kano',
      'Houston', 'Casablanca', 'Fukuoka', 'Hanoi',
      'Sydney', 'Maldives', 'Amsterdam', 'Florence',
      'Banff','Santorini','St. Lucia','Prague', 'Saigon'
    ]
   this.cityNameRef.current.value = cityRandom[this.randomInterval(0,(cityRandom.length-1))] 
    this.cityPopRef.current.value = this.randomInterval(1,1000000)
    this.cityLatRef.current.value = this.randomInterval(-89,+89)
    this.cityLongRef.current.value =  this.randomInterval(-179,+179)
                   
  }
  assemble_cityInfo = ()=>{
    this.cityInfo = { 'cityName':this.cityNameRef.current.value,
                      "cityPop":this.cityPopRef.current.value ,
                      "cityLat":this.cityLatRef.current.value ,
                      "cityLong":this.cityLongRef.current.value  
                    }

  }

  check_data_entry = ()=>{
    
    if (!(this.cityNameRef.current.value === '' ||
    this.cityPopRef.current.value === ''||
    this.cityLatRef.current.value === ''||
    this.cityLongRef.current.value === '')){return true}
     else {return false} 
  }

  run_addCity_code= ()=>{
    this.assemble_cityInfo()
    this.props.addCityButn(this.cityInfo)
    this.cityInfo ={} // re-initialize input screen after adding
  }

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
            ref ={this.cityNameRef}
            // defaultValue = {cityName}
            // onBlur={this.makeObject}
          />
          {/* <br /> */}
          City Population:
          <input
            type="text"
            placeholder="Opening Balance"
            name="cityPop"
            ref= {this.cityPopRef}
            // defaultValue = {cityPop}
            // onBlur={this.makeObject}
          />
          {/* <br /> */}
          Latitude :
          <input
            type="number"
            placeholder="Number"
            name="cityLat"
            ref = {this.cityLatRef}
            // defaultValue = {cityLat}
            // onBlur={this.makeObject}
          />
          {/* <br /> */}
          Longitude :
          <input
            type="number"
            placeholder="Number"
            name="cityLong"
            ref = {this.cityLongRef}
            // defaultValue = {cityLong}
            // onBlur={this.makeObject}
          />
          {/* <br /> */}
          <span>
            <button
              className="add"
              value="Add City"
              onClick= {() => {this.check_data_entry() ? 
                                (this.run_addCity_code()
                                ):
                                (alert("All the Inputs are Required") )
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
            <button
              style={{ marginLeft: 20 }}
              className="rand"
              onClick={()=>{this.generate_random_city()}}
            >
              Random City
            </button>
          </span>
        </fieldset>
      )
    );
  }
}

export default CityInputScreen;
