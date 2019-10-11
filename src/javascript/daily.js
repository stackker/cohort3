
const functions = {
    
    size: () => {
        /* if (num < 0) return "Negative";
        if (num < 10) return "small";
        if (num < 20) return "medium"; */


        return  ("Hello World");
    },

    makeEmailArr : (name) => {
        if(name instanceof Array===true) {
            let nameString =  name.map(changeCase);
            let emailName =nameString.join(".");

            let emailAdd = `${emailName}@evolveu.ca`;
            return emailAdd;
        }
        else {
            console.log("Pass Name as an Array");
        }


    }


    
};
function changeCase(text) {
    return text.toLowerCase();
}

export default functions;