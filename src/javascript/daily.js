
const functions = {


    // Prepare for Array Work - October 15, 2019

    forloop: (count) => {
        let i;
        let output = [];
        for (i = 0; i < count; i++) {
            output.push(i);
        }
        return output;
    },

    whileloop: (condn) => {
        while (condn !== true) {
            return `While input is ${condn}`;
        }

    },

    dowhile: (count) => {
        let i = 0;
        let output = [];
        do {
            output.push(i++);
        } while (i < count);
        return output;

    },

    forin: (bio) => {

        var stringobj = "";
        
        for (var char in bio) {
            stringobj += bio[char];
        }
        return stringobj;

    },

    forof: (arr) => {
        let arr1 =[];
        let output =[];
        for (const entry of arr ) {
           // console.log("entry: ",entry)
            arr1[0] = entry;
            output.push([arr1[0]]);
        }
        return output;

    },




    size: () => {
        /* if (num < 0) return "Negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        else
            return ("Hello World"); */



    },

    makeEmailArr: (name) => {
        if (name instanceof Array === true) {
            let nameString = name.map(changeCase);
            let emailName = nameString.join(".");

            let emailAdd = `${emailName}@evolveu.ca`;
            return emailAdd;
        }
        else {
            console.log("Pass Name as an Array");
        }


    },

    makeEmailObj: (name) => {
        let emailName = name.fname.toLowerCase() + "." + name.lname.toLowerCase();

        let emailAddress = `${emailName}@evolveu.ca`;
        return emailAddress;

    }




};
function changeCase(text) {
    return text.toLowerCase();
};




export default functions;