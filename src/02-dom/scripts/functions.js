const functions = {



    addListItem: (inputVal) => {
        const ordList = document.querySelector("#list-cont");
        const li = document.createElement("li");
        const text = document.createTextNode(inputVal);
        li.appendChild(text);
        ordList.appendChild(li);
    },

    showItems: (ol, showDiv) => {
        showDiv.textContent = ol.textContent;
    },

    deleteItem: (ol) => {
        ol.lastElementChild.remove();
    },

    // Exercise 2:

    counter: 0,

    createCard: () => {

        functions.counter++;
        // console.log("from createCard: Hello World");
        let div = document.createElement("div");
        div.setAttribute("count", functions.counter);
        div.className = "card";
        div.textContent = `Card ${functions.counter}`;
        let lBreak = document.createElement("br");
        div.appendChild(lBreak);


        //Create the buttons on the card
        const btnBefore = document.createElement('button');
        btnBefore.className = 'addBef';
        btnBefore.textContent = 'Add Before';
        div.appendChild(btnBefore);

        const btnAfter = document.createElement('button');
        btnAfter.className = 'addAft';
        btnAfter.textContent = 'Add After';
        div.appendChild(btnAfter);

        const delBtn = document.createElement('button');
        delBtn.className = 'del';
        delBtn.textContent = 'Delete Card';
        div.appendChild(delBtn);

        return div;

    },

    addCard: (parentDiv) => {
        console.log("addCard-Parent: ", parentDiv);
        let cardInGrp = functions.createCard();

        parentDiv.appendChild(cardInGrp);


        return;
    },
    positionCard: (parentCard,position) => {
        parentCard.insertAdjacentElement(position ,  functions.createCard());
       return;

    },
    delCard:(parentCard)=>{
        parentCard.remove();
        return;


    }

};


export default functions;