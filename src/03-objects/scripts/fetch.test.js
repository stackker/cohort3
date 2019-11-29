import fetchFunc from "./fetch.js";





// test("test setup",() => {
// 	console.log("Hello from fetch.test.js");
// 	console.log(fetchFunc.getAllFirstNames(data));

// 	expect (fetchFunc.getFirstName(data)).toEqual("Maricica");
// 	// expect (fetchFunc.getAllFirstNames(data)[3]).toEqual("Barbara");
// })


test("test getUsers", async () => {
await fetchFunc.getUsers();
})

const data = [
	{ "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" },
	{ "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" },
	{ "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" },
	{ "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" },
	{ "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" },
	{ "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" },
	{ "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" },
	{ "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" },
	{ "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" },
	{ "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]