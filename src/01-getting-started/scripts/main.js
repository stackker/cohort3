import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

Display.addEventListener("load",initInputs);

   

function initInputs(){
  document.getElementById("Display").value = "";
  console.log("listener Watch ON");
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

    










