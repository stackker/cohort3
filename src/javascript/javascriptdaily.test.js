import functions from './javascriptdaily.js'

test('Compare the two Parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false); // Consider the edge cases
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
});

