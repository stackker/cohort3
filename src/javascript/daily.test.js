import functions from './daily'
/* 
test('Check the sizes', () => {

 expect(functions.size()).toBe ("Hello World");  // Consider the edge cases
  // console.log("Hello World from test")
});
 */

/* test('email builder from an array', () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"]))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["Bill", "Smith"]))
      .toEqual("bill.smith@evolveu.ca");
}); */

/*	
	Write the function to format an email based on an object / map
*/


// tests for makeEmailObj - Oct 11, 2019

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});