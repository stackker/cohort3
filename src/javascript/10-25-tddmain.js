import functions from "./10-25-tdd.js";

console.log("hello from 10-25-tddmain.js");


            // add Event Listener to button Doit
            console.log("In main");
           calc.addEventListener('click', (event) => {
                console.log("click selected");
                let myFnum = Number(idfnum.value) ;
                let mySnum = Number(idsnum.value);
                console.log(myFnum, mySnum);

                let tget = event.target.id;
                console.log(tget);
                switch(tget){
                   
                    case "idadd":
                    console.log("in case idadd");
                    idans.value = functions.sum(myFnum , mySnum);
                    break;
                    case "idsub":
                    idans.value = functions.sub(myFnum , mySnum);
                    break;
                    case "idmul":
                    idans.value = functions.mult(myFnum , mySnum);
                    break;
                    case "iddiv":
                    idans.value = functions.div(myFnum , mySnum);
                    break;
                    default:
                        // Do nothing otherwise
                }
               

                // idans.value = functions.sum(myFnum , mySnum);
            });

 

