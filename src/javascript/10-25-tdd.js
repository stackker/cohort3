const functions = {

    helloWorld: () => {
        console.log("Hello World")

    },
    // A STUB has a function with a name, parameters and returns a dummy
    sum: (a, b) => {
        console.log("in sum")
        return a + b;
    },

    sub: (a, b) => {
        console.log("in diff")
        return a - b;
    },

    mult: (a, b) => {
        console.log("in mult")
        return a * b;
    },
    div: (a,b) => {
        console.log("in div",a,b, a/b);
        if (b === 0) {
            return "ERROR"
        };
        return a/b;
    }
}


export default functions;

