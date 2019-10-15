
const functions = {
    
    size: (num) => {
        
        if (num < 0) return "Negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        if(num2 ===0){
            return "ERROR"
        }
        else
            return num1 / num2;
            
    },

    fnDisplay:(inString) => {

        let outString;
        return outString;
    },

    expression: (strExpn)=> {

        return "Answer";

    
    



    }

    
};

export default functions;
