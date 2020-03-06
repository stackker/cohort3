import { cutils, cfunctions } from "./cityfunctions.js";
import * as oo from "../accounts.js";

test("test setup", () => {
  console.log("Hello from functions.test.js");
}),
  //     test('check Add ', () => {

  //         const ol = document.createElement("ol");
  //         ol.id = "list-cont";
  //         let listCount = ol.childElementCount;

  //         functions.addListItem("star", ol);
  //         // console.log(listCount,  ol.childElementCount);
  //         functions.addListItem("cat", ol);
  //         // console.log(listCount,  ol.childElementCount);

  //         expect(ol.childElementCount).toEqual(listCount + 2);

  //     });

  // test('check Show ', () => {

  //     const ol = document.createElement("ol");
  //     ol.id = "list-cont";
  //     let listCount = ol.childElementCount;

  //     functions.addListItem("star", ol);
  //     // console.log(listCount,  ol.childElementCount);
  //     functions.addListItem("cat", ol);
  //     // console.log(listCount,  ol.childElementCount);

  //     expect(ol.childElementCount).toEqual(listCount + 2);
  //     console.log(listCount, ol.textContent);
  //     functions.showItems(ol, ol);
  //     expect(ol.textContent).toEqual("starcat")

  // });

  // test('check Delete ', () => {

  //     const ol = document.createElement("ol");
  //     ol.id = "list-cont";
  //     let listCount = ol.childElementCount;

  //     functions.addListItem("star", ol);
  //     // console.log(listCount,  ol.childElementCount);
  //     functions.addListItem("cat", ol);
  //     // console.log(listCount,  ol.childElementCount);

  //     expect(ol.childElementCount).toEqual(listCount + 2);
  //     console.log(listCount, ol.textContent);

  //     // Delete the last item
  //     functions.deleteItem(ol);
  //     expect(ol.textContent).toEqual("star")

  // });

  // // Exercise 2

  // const parentBody = document.createElement("div");
  // parentBody.id = "idLeftPanel"

  // functions.addCard(parentBody);
  // functions.addCard(parentBody);
  // functions.addCard(parentBody);
  // functions.addCard(parentBody);

  // test('Testing addCard function ', () => {

  //     let countArr = functions.addCard(parentBody);

  //     expect(countArr).toEqual(['1', '2', '3', '4', '5']);

  // });

  // test('Testing delete functionality ', () => {

  //    // console.log("parentBody :", parentBody.children[2].className);
  //     // deletes the third child card with count #3
  //     let countArr = functions.delCard(parentBody.children[2], parentBody);
  //     //  // Adds a new Card  card with count #5 to the end
  //     let countArr1 = functions.addCard(parentBody);
  //     expect(countArr1).toEqual(['1', '2', '4', '5'])
  // });

  // test('Testing addBefore functionality ', () => {

  //     console.log("addBefore :", parentBody.children[2].getAttribute("count") );
  //     //Insert before Card 4
  //     let countArr = functions. positionCard(parentBody.children[2], "beforebegin");
  //     // deletes the third child card with count #3
  //    // let countArr1 = functions.addCard(parentBody);
  //     expect(countArr).toEqual(['1', '2', '4', '5'])
  // });

  test("Testing recover Account Name functionality ", () => {
    let buttonClickedid = "idDP:Savings";
    expect(cutils.recoverAccName(buttonClickedid)).toEqual("Savings");
  });

test.only("Testing Recreate Balance ID functionality ", () => {
  let account = new oo.Accounts();
  account = { accName: "Checking Account1", bal: 10 };
  expect(cutils.recreateIDforBalance(account)).toEqual(
    "idAB:Checking Account1"
  );
});
