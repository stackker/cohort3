import attrib from './syntax.js'
test('Attrib/Variabls', () => {
   // test for String
     expect(attrib.variable("word")).toBe ("string");  // Failed Test
    // test for Number
    expect(attrib.variable(23.7)).toBe ("number");
    // test for Boolean
    expect(attrib.variable(true)).toBe("boolean"); 
     // test for null

     let testnull = null;
     expect(attrib.variable(testnull)).toBe("null"); 

    // test for Array
    expect(attrib.variable([24,32])).toBe("array");
    //// test for object
    expect(attrib.variable({age:32})).toBe("object");
    // test for undefined
      var unDef 
    expect(attrib.variable(unDef)).toBe("undefined")



     
   });