

// define attributes / variables
const attrib = {
    // number // string    // boolean // undefined
   variable:(num) => {
      if(typeof num !=="object") {
        return typeof num;

      } else {
          // test for Arrays
          if(num instanceof Array=== true){
            // is array
            return "array";
          }  
          else if(num === null) {   // use ingmore type
            return "null";
          }
          else {
             // dictionary / objects
           return "object";
           } ;

      //   return false;


      };
  }
   
}; 
export default attrib;


/* sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value */

