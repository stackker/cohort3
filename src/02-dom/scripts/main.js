import functions from './functions.js';

const inpt = document.querySelector(`#inpt`);
const addBtn = document.querySelector(`#add`);
const delBtn = document.querySelector(`#delete`);
const ordList = document.querySelector(`#list-cont`)
const showBtn = show;
const showCont = showDiv;

addBtn.addEventListener("click", () => {
    if (inpt.value.length > 1) {

        functions.addListItem(inpt.value, ordList);
        inpt.value = "";

    }

});

delBtn.addEventListener("click", () => {
    if (ordList.childElementCount > 0) {

        functions.deleteItem(ordList);

    }

});

showBtn.addEventListener("click", () => {

    functions.showItems(ordList, showCont);

})



// Exercise 2

idLeftPanel.addEventListener("click", (event) => {
    console.log("Ex2Click:", event.target);
    let idLeftClick = event.target.id;
    console.log("leftClick:", idLeftClick);

    let elClicked = event.target;
    switch (elClicked.className) {
        case "addCard": {
            console.log("inAddCard Case :", event.target);
            const newCard = functions.addCard(idLeftPanel);
            break;
        }
        case "addBef": {
            //console.log("addBef Case :", event.target.parentElement.);

            let parentposition = elClicked.parentElement;
            // position = "beforebegin";  property of the method           
            const newCard  =  functions.positionCard(parentposition,"beforebegin")
            break;
        }
        case "addAft": {
            //console.log("addBef Case :", event.target.parentElement.);

            let parentposition = elClicked.parentElement;
            const newCard  =  functions.positionCard(parentposition,"afterend");
            break;
        
        }

        case "del": {
            console.log("inDel :", event.target.parentElement);
            let parentposition = elClicked.parentElement;
            let grandparent = parentposition.parentElement;
            const newCard = functions.delCard(parentposition, grandparent);
            //console.log("in del newCard",newCard);
          break;
        }

        default: {
            console.log("Not Programmed for :", event.target);
        }
    }


});