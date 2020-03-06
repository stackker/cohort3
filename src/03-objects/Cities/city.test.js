import { City, Community } from "./city.js";

test("check test", () => {
  console.log("testing from city.test.js");
});
test("check Show Method", () => {
  let TestCity = new City(1, "MyCity", 21.245, -55.25, 99);
  expect(TestCity.show()).toEqual("MyCity,21.245,-55.25,99");
});

test("check howBig Method", () => {
  let TestCity = new City(1, "MyCity", 99, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("Hamlet");

  TestCity = new City(2, "MyCity", 999, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("Village");

  TestCity = new City(3, "MyCity", 9999, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("Town");

  TestCity = new City(4, "MyCity", 99999, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("Large Town");

  TestCity = new City(5, "MyCity", 999999, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("City");
});

test("check MovedIn Method", () => {
  let TestCity = new City(1, "MyCity", 99, 21.245, -55.25);
  expect(TestCity.howBig()).toBe("Hamlet");
  expect(TestCity.movedin(10)).toBe(109);
  expect(TestCity.howBig()).toBe("Village");
});

test("check MovedOut Method", () => {
  let TestCity = new City(1, "MyCity", 100, 21.245, -55.25);

  expect(TestCity.movedOut(10)).toBe(90);
  expect(TestCity.movedOut(200)).toBe(90);
  expect(TestCity.movedOut(-10)).toBe(90);
  TestCity.movedin(10010);
  expect(TestCity.movedOut(10)).toBe(10090);
});

test("Community:  createCity Method", () => {
  let MetroData = new Community();
  // let TestCity =  new City("MyCity", 21.245, -55.250, 100);
  // expect(MetroData.createCity("MyVillage", 21.245, -55.250, 100)).toEqual(["MyVillage", 21.245, -55.250, 100]);
  MetroData.createCity(1, "MyVillage", 100, 21.245, -55.25);
  expect(MetroData.createCity(2, "MyTown", 1020, 121.245, -65.25)).toEqual([
    {
      key: 1,
      city: "MyVillage",
      lat: 21.245,
      long: -55.25,
      population: 100
    },
    {
      key: 2,
      city: "MyTown",
      lat: 121.245,
      long: -65.25,
      population: 1020
    }
  ]);
});
test("Community: deleteCity Method", () => {
  let MetroData = new Community();

  MetroData.createCity(1, "MyVillage", 100, 21.245, -55.25);
  MetroData.createCity(2, "MyTown", 1020, 121.245, -65.25);
  MetroData.createCity(3, "MyCity", 10200, 121.245, -25.25);
  MetroData.deleteCity("MyTown");
  expect(MetroData.deleteCity("MyTown")).toEqual([
    {
      key: 1,
      city: "MyVillage",
      lat: 21.245,
      long: -55.25,
      population: 100
    },
    {
      key: 3,
      city: "MyCity",
      lat: 121.245,
      long: -25.25,
      population: 10200
    }
  ]);
});

test("check getPopulation Method", () => {
  let MetroData = new Community();

  MetroData.createCity(1, "MyVillage", 100, 21.245, -55.25);
  MetroData.createCity(2, "MyTown", 1000, 121.245, -65.25);
  MetroData.createCity(3, "MyCity", 10000, 121.245, -25.25);
  // console.log(MetroData.getPopulation());
  expect(MetroData.getPopulation()).toEqual(11100);
});

test("check getMostSouthern() method", () => {
  let MetroData = new Community();

  MetroData.createCity(1, "MyVillage", 100, 21.245, -55.25);
  MetroData.createCity(2, "MyTown", 1000, 121.245, -65.25);
  MetroData.createCity(3, "MyCity", 10000, 121.245, -25.25);
  MetroData.createCity(4, "NewYork", 100000, 80.245, 25.25);
  MetroData.createCity(5, "Inuktituk", 100000, 80.245, 68.25);
  expect(MetroData.getMostSouthern().city).toEqual("MyTown");
});

test("check getMostNorthern() method", () => {
  let MetroData = new Community();

  MetroData.createCity(1, "MyVillage", 100, 21.245, -55.25);
  MetroData.createCity(2, "MyTown", 1000, 121.245, -65.25);
  MetroData.createCity(3, "MyCity", 10000, 121.245, -25.25);
  MetroData.createCity(4, "NewYork", 100000, 80.245, 25.25);
  MetroData.createCity(5, "Inuktituk", 100000, 80.245, 68.25);
  expect(MetroData.getMostNorthern().city).toEqual("Inuktituk");
});

test("check whichSphere ", () => {
  let MetroData = new Community();
  MetroData.createCity(3, "MyCity", 10000, -121.245, -25.25);
  MetroData.createCity(4, "NewYork", 100000, 80.245, 25.25);
  expect(MetroData.whichSphere(3)).toEqual("Southern Hemisphere");
  expect(MetroData.whichSphere(4)).toEqual("Northern Hemisphere");
});
