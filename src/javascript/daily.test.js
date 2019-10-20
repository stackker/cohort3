import functions from './daily'

// More Array Work - October 16-17 
test('demo for', () => {

    // slice

    expect(functions.doSlice(["zero", "one", "two", "three", "four", "five"], 2))
        .toEqual(["two", "three", "four", "five"]);

    expect(functions.doSlice(["zero", "one", "two", "three", "four", "five"], 2, 5))
        .toEqual(["two", "three", "four"]);


    // splice

    expect(functions.doSplice(["zero", "one", "two", "three", "four", "five"], 1, 0, "insert1"))
        .toEqual(["zero", "insert1", "one", "two", "three", "four", "five"]);

    expect(functions.doSplice(["zero", "one", "two", "three", "four", "five"], 3, 1, "new3"))
        .toEqual(["zero", "one", "two", "new3", "four", "five"]);

    // for each 

    expect(functions.doForEachmult12([1,2,3]))
    .toEqual([12,24,36]);

    //array.map()

    expect(functions.domap([10, 20, 30]))
        .toEqual([100, 400, 900]);

    // array.reduce

    expect(functions.doreduce([10, 20, 30]))
        .toEqual(6000);

    //array.filter

    expect(functions.doFilter([10, 57, 30, 74]))
        .toEqual([57, 74]);
    // array.sort
    expect(functions.doSort([10, 57, 30, 74]))
        .toEqual([10, 30, 57, 74]);

    expect(functions.doSort(["10", "57", "30", "174"]))
        .toEqual(['10','174', "30","57"]);


});




















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

/* test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
}); */