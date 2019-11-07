const functions = {



    addListItem: (inputVal, parentDiv) => {
        const ordList = parentDiv;
        const li = document.createElement("li");
        const text = document.createTextNode(inputVal);
        li.appendChild(text);
        //console.log("from addListItems: ", ordList.id,inputVal )
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
       // console.log("addCard-Parent: ", parentDiv);
        let cardInGrp = functions.createCard();
        parentDiv.appendChild(cardInGrp);
        return functions.resultArray(parentDiv, "div", "count");
    },



    positionCard: (parentCard, position) => {
        parentCard.insertAdjacentElement(position, functions.createCard());
        return functions.resultArray(parentDiv, "div", "count");

    },
    delCard: (parentCard,parentDiv) => {
       // console.log("delCard parentDiv", parentDiv);
        parentCard.remove();
        return functions.resultArray(parentDiv, "div", "count");
    },

    resultArray: (parent, elLabel, searchAttib) => {
        // Returns an Array of Resulting nodes for testing after manipulation
        let contentArr = [];
        //console.log("contentArray parent", parent);
        for (let itemColln of parent.getElementsByTagName(elLabel)) {
            contentArr.push(itemColln.getAttribute(searchAttib));
        };

        console.log("contentArray", contentArr);
        return contentArr;

    }






};


export default functions;