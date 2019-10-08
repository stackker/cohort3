/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

const functions = {
    assertEquals:  (p1,p2) => {
        switch(p1 === p2) {
            case true:
                return true;
                break;
            case false:
                //prepare output as object
                let param1 = `p1-->${p1}`;
                let param2 = `p2-->${p2}`;
                const myComment = "*** the two values are not the same:";
        
                console.log(myComment);
                console.log(param1);
                console.log(param2);

                return false;
                break;
        
            
        
        }
    }   
}
export default functions;




// and before this comment ---



functions.assertEquals("a","b");
functions.assertEquals("a","a");
functions.assertEquals(1,2);
functions.assertEquals(2,2);
functions.assertEquals("2",2);
functions.assertEquals("This value","This value");





