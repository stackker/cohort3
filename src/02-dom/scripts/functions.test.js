import functions from './functions.js';

test("test setup", () => {
    console.log("Hello from functions.test.js");
}),


    test('check Add ', () => {

        const ol = document.createElement("ol");
        ol.id = "list-cont";
        let listCount = ol.childElementCount;

        functions.addListItem("star", ol);
        // console.log(listCount,  ol.childElementCount);
        functions.addListItem("cat", ol);
        // console.log(listCount,  ol.childElementCount);

        expect(ol.childElementCount).toEqual(listCount + 2);


    });


test('check Show ', () => {
   
    const ol = document.createElement("ol");
    ol.id = "list-cont";
    let listCount = ol.childElementCount;
   
    functions.addListItem("star", ol);
    // console.log(listCount,  ol.childElementCount);
    functions.addListItem("cat", ol);
    // console.log(listCount,  ol.childElementCount);

    expect(ol.childElementCount).toEqual(listCount + 2);
    console.log(listCount,  ol.textContent);
    functions. showItems(ol, ol)
    expect(ol.textContent).toEqual("starcat")
    
    });






