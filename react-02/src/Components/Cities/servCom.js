// import { cutils, cfunctions } from "./cityfunctions.js";
// import { Accounts, AccountController } from "/accounts.js";
import { City } from "./CityClass.js";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

const url = "http://localhost:5000/";

async function updateServCity(city) {
  // let error;
  try {
    let data = await postData(url + "update", city);
    if (data.status !== 200) {
      throw new Error("Server not updated");
    } else {
      //consolelog(`Success:  ${city.key} updated`);
    }
    return data;
  } catch (error) {
    //consoleerror(error);
  }
}

async function deleteServCity(key) {
  let data = await postData(url + "delete", { key:key });
  return data;
}

async function createServCity(city) {
  let data = await postData(url + "add", city);
  //consolelog("createServCity", data);
  return data;
}

async function syncServerCities(panelId, CommunityArr) {
  let serverCity = await postData(url + "all");
  //consolelog("syncServerCities :", serverCity);

  // sort ascending , so that the highest key is avln in the city Array
  let sortedServerCity = serverCity.sort(
    (a, b) => Number(a.key) - Number(b.key)
  );
  //consolelog("syncServerCities sorted :", sortedServerCity);

  for (let card of sortedServerCity) {
    let cityCard = new City(
      card.key,
      card.city,
      card.population,
      card.lat,
      card.long
    );
    // Add to Controller Array
    CommunityArr.cityData.push(cityCard);
    CommunityArr.cityKey = cityCard.key;

    // Add to HTML Display
    // let newCard = cfunctions.addCity(panelId, cityCard);
  }
  //consolelog("syncServerCities returned :", CommunityArr);
  return serverCity;
}

export { createServCity, syncServerCities, updateServCity, deleteServCity };
