import { City, Community } from "./city.js";


test("check test", () => {
	console.log("testing from city.test.js");
});
test("check Show Method", () => {

	let TestCity = new City(1, "MyCity", 21.245, -55.250, 99);
	expect(TestCity.show()).toEqual("MyCity, 21.245, -55.25, 99");

});

test("check howBig Method", () => {
	let TestCity = new City(1, "MyCity", 21.245, -55.250, 99);
	expect(TestCity.howBig()).toBe("Hamlet");

	TestCity = new City(2, "MyCity", 21.245, -55.250, 999);
	expect(TestCity.howBig()).toBe("Village");

	TestCity = new City(3, "MyCity", 21.245, -55.250, 9999);
	expect(TestCity.howBig()).toBe("Town");

	TestCity = new City(4, "MyCity", 21.245, -55.250, 99999);
	expect(TestCity.howBig()).toBe("Large Town");

	TestCity = new City(5, "MyCity", 21.245, -55.250, 999999);
	expect(TestCity.howBig()).toBe("City");

});

test("check MovedIn Method", () => {
	let TestCity = new City(1, "MyCity", 21.245, -55.250, 99);
	expect(TestCity.howBig()).toBe("Hamlet");
	expect(TestCity.movedin(10)).toBe(109);
	expect(TestCity.howBig()).toBe("Village");


});

test("check MovedOut Method", () => {
	let TestCity = new City(1, "MyCity", 21.245, -55.250, 100);

	expect(TestCity.movedOut(10)).toBe(90);
	expect(TestCity.movedOut(200)).toBe(90);
	expect(TestCity.movedOut(-10)).toBe(90);
	TestCity.movedin(10010);
	expect(TestCity.movedOut(10)).toBe(10090);

});

test("Community:  createCity Method", () => {
	let MetroData = new Community;
	// let TestCity =  new City("MyCity", 21.245, -55.250, 100);
	// expect(MetroData.createCity("MyVillage", 21.245, -55.250, 100)).toEqual(["MyVillage", 21.245, -55.250, 100]);
	MetroData.createCity(1, "MyVillage", 21.245, -55.250, 100);
	expect(MetroData.createCity(2, "MyTown", 121.245, -65.250, 1020)).toEqual
		([
			{
				"key": 1,
				"aname": "MyVillage",
				"latitude": 21.245,
				"longitude": -55.25,
				"population": 100
			},
			{
				"key": 2,
				"aname": "MyTown",
				"latitude": 121.245,
				"longitude": -65.25,
				"population": 1020
			}
		]);
});
test("Community: deleteCity Method", () => {
	let MetroData = new Community;

	MetroData.createCity(1, "MyVillage", 21.245, -55.250, 100);
	MetroData.createCity(2, "MyTown", 121.245, -65.250, 1020);
	MetroData.createCity(3, "MyCity", 121.245, -25.250, 10200);
	MetroData.deleteCity("MyTown");
	expect(MetroData.deleteCity("MyTown")).toEqual([
		{
			key: 1,
			aname: 'MyVillage',
			latitude: 21.245,
			longitude: -55.25,
			population: 100
		},
		{
			key: 3,
			aname: 'MyCity',
			latitude: 121.245,
			longitude: -25.25,

			population: 10200
		}]);

});

test("check getPopulation Method", () => {
	let MetroData = new Community;

	MetroData.createCity(1, "MyVillage", 21.245, -55.250, 100);
	MetroData.createCity(2, "MyTown", 121.245, -65.250, 1000);
	MetroData.createCity(3, "MyCity", 121.245, -25.250, 10000);
	// console.log(MetroData.getPopulation());
	expect(MetroData.getPopulation()).toEqual(11100);
});

test("check getMostSouthern() method", () => {
	let MetroData = new Community;

	MetroData.createCity(1, "MyVillage", 21.245, -55.250, 100);
	MetroData.createCity(2, "MyTown", 121.245, -65.250, 1000);
	MetroData.createCity(3, "MyCity", 121.245, -25.250, 10000);
	MetroData.createCity(4, "NewYork", 80.245, 25.250, 100000);
	MetroData.createCity(5, "Inuktituk", 80.245, 68.250, 100000);
	expect(MetroData.getMostSouthern().aname).toEqual("MyTown");
})

test("check getMostNorthern() method", () => {
	let MetroData = new Community;

	MetroData.createCity(1, "MyVillage", 21.245, -55.250, 100);
	MetroData.createCity(2, "MyTown", 121.245, -65.250, 1000);
	MetroData.createCity(3, "MyCity", 121.245, -25.250, 10000);
	MetroData.createCity(4, "NewYork", 80.245, 25.250, 100000);
	MetroData.createCity(5, "Inuktituk", 80.245, 68.250, 100000);
	expect(MetroData.getMostNorthern().aname).toEqual("Inuktituk");
})


test("check whichSphere ", () => {
	let MetroData = new Community;
	MetroData.createCity(3, "MyCity", 121.245, -25.250, 10000);
	MetroData.createCity(4, "NewYork", 80.245, 25.250, 100000);
	expect(MetroData.whichSphere(3)).toEqual("Southern Hemisphere");
	expect(MetroData.whichSphere(4)).toEqual("Northern Hemisphere")
})



