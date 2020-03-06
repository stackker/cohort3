import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
  idNumberSize.textContent = functions.size(idNumber.value);
}));

Display.addEventListener("load", initInputs);



function initInputs() {
  document.getElementById("Display").value = "";
  console.log("listener Watch ON");
};


function sensor(keystroke) {
  let resetDisplay = "OFF";
  let operands = ["/", "*", "-", "+"];

  if (keystroke.data === "=") {
    let str1 = document.getElementById("Display").value;
    // strEval = str1;
    let strEval = str1.slice(0, -1) // <-  Drops the "=" entered

    document.getElementById("Display").value = strEval;
    console.log("Inside if ", strEval);
    //  let result = functions.expression(strEval);

    // Optput  result to screen.
    let result = expression(strEval);
    document.getElementById("Display").value = result;
    resetDisplay = "ON";

  }
  else {

    if (resetDisplay === "OFF") {
      //     document.getElementById("Display").value = keystroke.data;
      //     resetDisplay = "OFF";

      console.log(resetDisplay, keystroke.data);
    };
  }

  function ClearDisplay() {
    document.getElementById("Display").value = "";

    // console.log("Cleared from Click");
  };

};








/* got this error
Module source URI is not allowed in this document: “file:///C:/code/cohort3/src/01-getting-started/scripts/main.js”.
*/

/*
Display.addEventListener("change",sensor(event) , {

  } );

   */

/*
  function sensor(keystroke) {

    console.log(keystroke.data);
  } ;
 */












