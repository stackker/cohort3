
//0. Write the test without expect  with a console log to ensure that the test is picked up
//1. Write theStub first with a dummy return
//2. Write a failing test
//3. Write min code to pass the test
//4. Repeat with a return to fail
//5. Modify the function to make it pass
//6. 


import functions from "./10-25-tdd.js"


test('test helloWorld', () => {

    console.log("test helloWorld")
});

test("Does that add function work?", () => {
    expect(functions.sum(1, 2)).toBe(3);
    expect(functions.sum(101, 202)).toBe(303);
  });
  
  test("Does that subtract  function work?", () => {
    expect(functions.sub(1, 2)).toBe(-1);
    expect(functions.sub(201, 20)).toBe(181);
  });
  
  test("Does that multiply  function work?", () => {
    expect(functions.mult(1, 2)).toBe(2);
    expect(functions.mult(201, 20)).toBe(4020);
  
  });
  
  test("Does that divide  function work?", () => {
    expect(functions.div(1, 2)).toBe(0.5);
    expect(functions.div(201, 0)).toBe("ERROR");
    expect(functions.div(0, 45)). toBe(0);
    
  });
  
 
