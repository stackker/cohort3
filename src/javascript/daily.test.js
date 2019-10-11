import functions from './daily'
/* 
test('Check the sizes', () => {

 expect(functions.size()).toBe ("Hello World");  // Consider the edge cases
  // console.log("Hello World from test")
});
 */

test('email builder from an array', () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"]))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["Bill", "Smith"]))
      .toEqual("bill.smith@evolveu.ca");
});