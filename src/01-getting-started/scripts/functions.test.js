import functions from "./functions";

test("Check the sizes", () => {
  expect(functions.size(-1)).toBe("Negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(2000000)).toBe("large");
});

test("Does that add function work?", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});

test("Does that subtract  function work?", () => {
  expect(functions.subtract(1, 2)).toBe(-1);
  expect(functions.subtract(201, 20)).toBe(181);
});

test("Does that multiply  function work?", () => {
  expect(functions.multiply(1, 2)).toBe(2);
  expect(functions.multiply(201, 20)).toBe(4020);

});

test("Does that divide  function work?", () => {
  expect(functions.divide(1, 2)).toBe(0.5);
  expect(functions.divide(201, 0)).toBe("ERROR");
  expect(functions.divide(0, 45)). toBe(0);
  
});

test("Display Output", () => {
  expect(functions.fnDisplay(1, 2)).toBe();
  expect(functions.fnDisplay(201, 0)).toBe();
  expect(functions.fnDisplay(0, 45)). toBe();
  
});