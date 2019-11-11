
const functions = {

    // Callback Exercise (Part 1) - November 8, 

    processPeopleFromProvince: (personArr, province, callBackFn) => {
        // Multiple provinces passed in the test Environment
        // drawback is that it creates a seerate run for each province and testing has to be done inside an If Condition.
        // CallBack Fn needs to be provided which proceses an Array inthe first Level
        let arrPeopleByProvince = personArr.filter((person) => {
            return (person.province == province);
        })
        return callBackFn(arrPeopleByProvince);
    },


    fullName: (arrList) => {
        //console.log(arrList);
        let name_arrList = arrList.map((objkt) => {
            objkt["name"] = `${objkt.fname} ${objkt.lname}`;
            // console.log(objkt);
            return objkt;
        });
        // console.log(name_arrList);
        return name_arrList;
    },












    // More Array Exercises (Really) - November 6, 2019
    BalanceGE1000: (personArr) => {

        return personArr.filter((person) => {
            return person.balance >= 1000
        })
    },


    // More Array Exercises - October 29, 2019

    sumBalance: (objList) => {
        let arrBal = [];
        let sum = 0;


        for (let line of objList) {

            let count = arrBal.push(line.balance);
            // console.log(line.balance, arrBal, count);

        };
        sum = arrBal.reduce(function (total, balVal, indx) {
            return total + balVal;

        });
        //  console.log(sum, arrBal);
        return sum;
    },

    avgBalance: (objList) => {
        let sum = functions.sumBalance(objList);
        let count = Number(objList.length);
        console.log(sum, count);
        return (sum / count).toFixed(3);

    },










    // loopStaff each / map - October 25, 2019
    loopStaffForEach: (objName) => {

        let staffEmail = [];

        objName.forEach((arrEntry, indx) => {
            staffEmail.push(functions.makeEmailObj(arrEntry));
            //console.log(staffEmail[indx]);
            // return staffEmail[indx];
        });
        return staffEmail;
    },

    loopStaffMap: (objName) => {
        let staffEmail = [];

        //console.log(objName);

        staffEmail = objName.map((name) => {
            return functions.makeEmailObj(name);
            // console.log(name);
        });

        return staffEmail;
    },



    // loopStaff: in / of - October 24, 2019

    loopStaffIn: (objname) => {
        let staffEmail = [];
        for (let x in objname) {
            staffEmail[x] = functions.makeEmailObj(objname[x]);
        }
        return staffEmail;

    },



    // loopStaff - October 21, 2019
    loopStaff: (objName) => {

        let staffEmail = [];
        let dummyvar;
        dummyvar = objName.forEach((arrEntry, indx) => {
            staffEmail[indx] = functions.makeEmailObj(arrEntry);
            //console.log(staffEmail[indx]);
            // return staffEmail[indx];
        });
        return staffEmail;



    },









    // More Array Work - October 16-17

    // https://3.basecamp.com/3951314/buckets/13806778/google_documents/2111087396

    //slice()

    doSlice: (origArray, begin, end) => {

        let newArray = origArray.slice(begin, end);
        return newArray;

    },

    //splice()
    //CAUTION: Do not return the result of the splice func. it is a []. Splice actually modifies the orignial array U splice
    doSplice: (origArray, begindx, numDelElem, newitem1) => {
        origArray.splice(begindx, numDelElem, newitem1);
        //console.log(origArray);
        return origArray;


    },

    doForEachmult12: (origArray) => {

        // Caution: for each in (obj) This has been depreciated

        //The forEach() method calls a function once for each element in an array, in order.
        let retvalue;
        let currentValue;
        // let index ;
        // let  arr ;
        // let thisValue ;
        //retvalue = origArray.forEach(mult12);
        // console.log(currentValue);
        origArray.forEach(mult12); //retvalue;

        return retvalue;
        function mult12(retvalue) {
            return currentValue * 12;
        }


    },

    //map function
    /* 
        The keys of an Object are String and Symbol, whereas they can be any value for a Map, including functions, objects, and any primitive.
    The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion. */

    /* The map() method creates a new array with the results of calling a function for every array element.
    
    The map() method calls the provided function once for each element in an array, in order.
    
    Note: map() does not execute the function for array elements without values.
    
    Note: this method does not change the original array.
     */


    domap: (origArray) => {
        let curVal;
        let retVal = origArray.map(sqr);
        return retVal;

        function sqr(indx) { return indx * indx }



    },

    doreduce: (origArray) => {
        let accumulator = 0;
        let initVal = 1;
        let curVal, curIndx, arr, acc;
        accumulator = origArray.reduce((acc, curVal) => { return acc * curVal; });

        return accumulator;

        // function mult(acc, curVal) {return  acc * curVal; }
    },

    doFilter: (origArray) => {
        //The filter() method creates an array filled with all array elements that pass a test (provided as a function)
        let newArray = origArray.filter(pass);
        return newArray;

        function pass(marks) {
            return marks >= 50;
        }
    },

    doSort: (origArray) => {
        let newArray = origArray.sort();
        return newArray;
    },










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
        let arr1 = [];
        let output = [];
        for (const entry of arr) {
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
        // console.log(name);
        let emailName = name.fname.toLowerCase() + "." + name.lname.toLowerCase();

        let emailAddress = `${emailName}@evolveu.ca`;
        //console.log(emailAddress);
        return emailAddress;

    },




};

function changeCase(text) {
    return text.toLowerCase();
};





export default functions;