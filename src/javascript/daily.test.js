import functions from './daily'

// Destructuring-assignment - November 26, 
test("Destructuring Example", () => {
	let city = {
		cityKey: 25,
		cityName: "Edmonton",
		cityPopulation: 2000000,
		cityLatitude: -164.254,
		cityLongitude: 154
	}

	let { cityKey, cityName, cityPopulation, cityLatitude, cityLongitude } = city


	expect(cityKey).toBe(25);
	expect(cityName).toBe("Edmonton");

})







// ______________________________________________________
let myArray = [
	{ num: 5, str: "apples", origin: "BC" },
	{ num: 7, str: "oranges", origin: "Florida" },
	{ num: 2, str: "lemons", origin: "Mexico" },
	{ num: 8, str: "bananas", origin: "Ecuador" },
	{ num: 6, str: "avocados", origin: "Mexico" },
	{ num: 4, str: "pineapple", origin: "Brazil" },
	{ num: 3, str: "blueberries", origin: "Chile" },
	{ num: 9, str: "pears", origin: "Oregon" },
	{ num: 1, str: "cantaloupe", origin: "California" }
];
//November 22, 2019 - Three ways of functions
// Do the statements below 3 times, one for each type of function
//

//By number ascending, using anonymous function
console.log(myArray.sort(function (a, b) { return parseFloat(a.num) - parseFloat(b.num) }));


// By fruit alphabetic, using named function
function sortByKey(objArray, key) {
	let sortedArray = objArray.sort((a, b) => {
		if (a[key] < b[key]) {
			return -1
		}
		else if (a[key] > b[key]) {
			return 1
		}
		else { return 0 }
	})
	return sortedArray;
}
console.log(sortByKey(myArray, "str"));

// By origin reverse alphabetic, using arrow function
let sortedArray = ((objArray, key) => {
	let decendSortedArray = objArray.sort((a, b) => {
		if (a[key] < b[key]) {
			return 1
		}
		else if (a[key] > b[key]) {
			return -1
		}
		else { return 0 }
	})
	return decendSortedArray;
})

console.log(sortedArray(myArray, "origin"));

//______________________________________________________



const people = [
	{ fname: "Alex", lname: "Smith", province: "BC", age: 33 },
	{ fname: "Angela", lname: "Jones", province: "AB", age: 61 },
	{ fname: "Anne", lname: "Bird", province: "SK", age: 35 },
	{ fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
	{ fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
	{ fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
	{ fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
	{ fname: "Dima", lname: "Curry", province: "MN", age: 67 },
	{ fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
	{ fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
	{ fname: "Faith", lname: "Liu", province: "SK", age: 46 },
	{ fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
	{ fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
	{ fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
	{ fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
	{ fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
	{ fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
	{ fname: "James", lname: "Kramer", province: "AB", age: 57 },
	{ fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
	{ fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
	{ fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
	{ fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
	{ fname: "Joe", lname: "Banks", province: "SK", age: 37 },
	{ fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
	{ fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
	{ fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
	{ fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
	{ fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
	{ fname: "Luis", lname: "Price", province: "BC", age: 23 },
	{ fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
	{ fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
	{ fname: "Matt", lname: "Novak", province: "MN", age: 29 },
	{ fname: "Monica", lname: "Giles", province: "BC", age: 34 },
	{ fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
	{ fname: "Omar", lname: "Olson", province: "SK", age: 69 },
	{ fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
	{ fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
	{ fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
	{ fname: "Shane", lname: "Frost", province: "SK", age: 87 },
	{ fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
	{ fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
	{ fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
	{ fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
	{ fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

//	November 21, 2019 - Callback Exercise (Part 2)

// function using the generic callback function which returns an object of the total number of people, total age, and the average age of people from BC and Alberta only.

test("Callback Exercise (Part 2)", () => {
	let reqdProvinces = ["AB", "BC"];
	for (let province of reqdProvinces) {
		if (province == "AB") {
			expect(functions.processPeopleFromProvince(people, province, functions.personStatistics)).toEqual({ countOfPeople: 11, sumOfAges: 497, avgOfAges: '45.182' })
		} else {
			// province is BC
			expect(functions.processPeopleFromProvince(people, province, functions.personStatistics)).toEqual({ countOfPeople: 11, sumOfAges: 341, avgOfAges: '31.000' })


		}
	}

})


//Callback Exercise (Part 1) - November 8, 2019

test("/Callback Exercise (Part 1) - November 8, 2019", () => {
	// console.log("From Callback Exercise (Part 1) - November 8, 2019")
	expect(people[0]).toEqual({ fname: "Alex", lname: "Smith", province: "BC", age: 33 });
	expect(functions.fullName(people)[0]).toEqual({ fname: "Alex", lname: "Smith", province: "BC", age: 33, name: "Alex Smith" });

})
test("fullName Array  - November 8, 2019", () => {
	// console.log(functions.processPeopleFromProvince(people, "AB", functions.fullName));
})
test("Final Level of Nov8 requirement", () => {
	let reqdProvinces = ["AB", "BC"];
	for (let province of reqdProvinces) {
		// console.log(functions.processPeopleFromProvince(people, province, functions.fullName));
		if (province == "AB") {
			expect(functions.processPeopleFromProvince(people, province, functions.fullName)[0]).toEqual({
				fname: 'Angela', lname: 'Jones',
				province: 'AB', age: 61, name: 'Angela Jones'
			});
		}
		else {
			expect(functions.processPeopleFromProvince(people, province, functions.fullName)[0]).toEqual({ fname: 'Alex', lname: 'Smith', province: 'BC', age: 33, name: 'Alex Smith' });
		}

	}

})

// let reqdProvinces = ["AB", "BC"];
// console.log(functions.filterProvince(reqdProvince));

// console.log(functions.filterByProvince(people, reqdProvinces));





//_______________________________________________________________



/*
    Sample data for the next few exercises.
*/

const data = {
	staff: [
		{ fname: "Jane", lname: "Smith", balance: 10 },
		{ fname: "Liam", lname: "Henry", balance: 1000 },
		{ fname: "Emma", lname: "Jones", balance: 1330 },
		{ fname: "Olivia", lname: "Notly", balance: 310 },
		{ fname: "Noah", lname: "Ho", balance: 503 },
		{ fname: "William", lname: "Lee", balance: 520 },
		{ fname: "Benjamin", lname: "Amis", balance: 150 },
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};
const staffEmail = functions.loopStaffIn(data.staff);
// ___________________________________________________________________________

// More Array Exercises (Really) - November 6, 2019

test("Data lines with Balances >=1000 Test", () => {
	expect(functions.BalanceGE1000(data.staff)).toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 },
	{ fname: "Emma", lname: "Jones", balance: 1330 }])
})



// More Array Exercises - October 29, 2019
test("sumBalance Test", () => {
	expect(functions.sumBalance(data.staff)).toEqual(3823)
})

test("avgBalance Test", () => {
	expect(functions.avgBalance(data.staff)).toEqual("546.143")
})





// loopStaff each / map - October 25, 2019

const staffEmail2 = functions.loopStaffForEach(data.staff)

test("email builder using forEach", () => {
	expect(staffEmail2[0])
		.toEqual("jane.smith@evolveu.ca");
	expect(staffEmail2[3])
		.toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail2[6])
		.toEqual("benjamin.amis@evolveu.ca");

});
const staffEmail3 = functions.loopStaffMap(data.staff)
test("email builder using map", () => {
	expect(staffEmail3[0])
		.toEqual("jane.smith@evolveu.ca");
	expect(staffEmail3[3])
		.toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail3[6])
		.toEqual("benjamin.amis@evolveu.ca");

});



// loopStaff: in / of - October 24, 2019


// // Write your tests here




test('email builder using forLoopin', () => {
	const staffEmail1 = functions.loopStaffIn(data.staff);
	expect(staffEmail1[0])
		.toEqual("jane.smith@evolveu.ca");
	expect(staffEmail1[3])
		.toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail1[6])
		.toEqual("benjamin.amis@evolveu.ca");
});





// loopStaff - October 21, 2019

/*
    Sample data for the next few exercises.
*/



/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company', () => {
	// const staffEmail = functions.loopStaff(data.staff);
	expect(staffEmail[0])
		.toEqual("jane.smith@evolveu.ca");
	expect(staffEmail[3])
		.toEqual("olivia.notly@evolveu.ca");
	expect(staffEmail[6])
		.toEqual("benjamin.amis@evolveu.ca");
});






// More Array Work - October 16-17 
// test('demo for', () => {

//     // slice

//     expect(functions.doSlice(["zero", "one", "two", "three", "four", "five"], 2))
//         .toEqual(["two", "three", "four", "five"]);

//     expect(functions.doSlice(["zero", "one", "two", "three", "four", "five"], 2, 5))
//         .toEqual(["two", "three", "four"]);


//     // splice

//     expect(functions.doSplice(["zero", "one", "two", "three", "four", "five"], 1, 0, "insert1"))
//         .toEqual(["zero", "insert1", "one", "two", "three", "four", "five"]);

//     expect(functions.doSplice(["zero", "one", "two", "three", "four", "five"], 3, 1, "new3"))
//         .toEqual(["zero", "one", "two", "new3", "four", "five"]);

//     // for each 

//     expect(functions.doForEachmult12([1,2,3]))
//     .toEqual([12,24,36]);

//     //array.map()

//     expect(functions.domap([10, 20, 30]))
//         .toEqual([100, 400, 900]);

//     // array.reduce

//     expect(functions.doreduce([10, 20, 30]))
//         .toEqual(6000);

//     //array.filter

//     expect(functions.doFilter([10, 57, 30, 74]))
//         .toEqual([57, 74]);
//     // array.sort
//     expect(functions.doSort([10, 57, 30, 74]))
//         .toEqual([10, 30, 57, 74]);

//     expect(functions.doSort(["10", "57", "30", "174"]))
//         .toEqual(['10','174', "30","57"]);


// });




















// for
/* test('demo for', () => {
    let fortimes = 3;
    expect(functions.forloop(fortimes))
        .toEqual([0, 1, 2]);
    expect(functions.forloop(7))
        .toEqual([0, 1, 2, 3, 4, 5, 6]);
    // while
    expect(functions.whileloop(true)).toEqual();
    expect(functions.whileloop(false)).toEqual("While input is false");

    // do while
    expect(functions.dowhile(5)).toEqual([0,1,2,3,4]);

    // for in
    expect(functions.forin({name:"sid",age: 21,height: "155 cm"})).toEqual("sid21155 cm");

    // for of
    expect(functions.forof ([1,2,3,4])).toEqual([[1],[2],[3],[4]]);
});
 */











/*
test('Check the sizes', () => {

 expect(functions.size()).toBe ("Hello World");  // Consider the edge cases
  // console.log("Hello World from test")
});
 */

// test('email builder from an array', () => {
//   const name = ["first", "last"];
//   expect(functions.makeEmailArr(name))
//       .toEqual("first.last@evolveu.ca");
//   expect(functions.makeEmailArr(["First", "Last"]))
//       .toEqual("first.last@evolveu.ca");
//   expect(functions.makeEmailArr(["Bill", "Smith"]))
//       .toEqual("bill.smith@evolveu.ca");
// });

/*
	Write the function to format an email based on an object / map
*/


// tests for makeEmailObj - Oct 11, 2019

// test('email builder from an object / map', () => {
//     const name = { fname: 'first', lname: 'last' };
//     expect(functions.makeEmailObj(name))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
//         .toEqual("bill.smith@evolveu.ca");
// });