global.fetch = require("node-fetch");

import * as server from "./servCom.js";

const url = "http://localhost:5000/";

const clients = [
  { key: 6, city: "Moose Head", population: 10000, lat: -52.28, long: -13.81 }
];
let city = {
  key: 7,
  city: "Moose Jaw",
  population: "23420",
  lat: "2",
  long: "3"
};

test("Testing from citiesFetch ", () => {
  console.log("printed from  citiesFetch");
});

test("local fetch works?", async () => {
  let data = await postData(url + "add", clients[0]);
  expect(data.status).toEqual(200);
});

test("server  fetch add?", async () => {
  let data = await server.createServCity(city);
  expect(data.status).toEqual(200);
});

test("server  fetch update?", async () => {
  let data = await server.updateServCity(city);
  expect(data.status).toEqual(200);
});

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
