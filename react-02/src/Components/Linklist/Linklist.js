import React, { useState } from "react";
import "./LList.css";

import Button from "react-bootstrap/Button";
import { LinkedList } from "./LLfunctions.js";

const LLInst = new LinkedList();

function LList() {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");

  const subjectInputChange = event => {
    setSubject(event.target.value);
  };

  const amountInputChange = event => {
    setAmount(event.target.value);
  };

  const pressEnter = event => {
    if (event.key === "Enter" || event.target.name === "enterButton") {
      subject !== "" && amount !== ""
        ? handleAdd()
        : alert("Subject and Amt Fields cannot be empty ");
    }
  };

  const handleAdd = () => {
    LLInst.add(subject, amount);
    setCurrent(LLInst.current);
    LLInst.showList();

    setSubject("");
    setAmount("");
  };

  const handleControlClick = e => {
    // `{e.target.name}()`;
  };
  const handleFirst = e => {
    console.log("Target: ", e.target.name);
    LLInst.first();
    setCurrent(LLInst.first());
  };

  const handlePrevious = e => {
    console.log("Target: ", e.target.name);
  };

  const handleInsert = e => {
    console.log("Target: ", e.target.name);
  };

  const handleDelete = e => {
    console.log("Target: ", e.target.name);
  };

  const handleNext = e => {
    console.log("Target: ", e.target.name);
  };

  const handleLast = e => {
    console.log("Target: ", e.target.name);
  };

  const renderNodes = () => {
    const markCurent = {
      color: "blue",
      fontWeight: "bold",
      backgroundColor: "white"
    };
    // let nodes = [];
    while (LLInst.current) {
      console.log("showlist: ", LLInst.showList());
      let llistArr = [];
      llistArr = LLInst.showList();
      // console.log("llistArr", LLInst.current);

      return llistArr.map(nodes => {
        console.log("llistArr curr", LLInst.current);
        console.log("llistArr head", LLInst.headNode);
        console.log("nodes", nodes);

        return nodes[0] === LLInst.current.subject ? (
          <div>
            <p
              key={nodes[0] + nodes[1]}
              style={{
                color: "blue",
                fontWeight: "bold",
                backgroundColor: "white"
              }}
            >
              {nodes[0]}, {nodes[1]},{nodes[2]}
            </p>
          </div>
        ) : (
          <div>
            <p key={nodes[0] + nodes[1]}>
              {nodes[0]}, {nodes[1]},{nodes[2]}
            </p>
          </div>
        );
      });

      // return (
      //   <div>
      //     llistArr.map((nodes) =>
      //     {nodes === LLInst.current ? (
      //       <p
      //         key={nodes.subject + nodes.amount}
      //         style={{
      //           color: "blue",
      //           fontWeight: "bold",
      //           backgroundColor: "white"
      //         }}
      //       >
      //         {nodes.subject}, {nodes.amount},{nodes.nextNode}
      //       </p>
      //     ) : (
      //       <p key={nodes.subject + nodes.amount}>
      //         {nodes.subject}, {nodes.amount},{nodes.nextNode}
      //       </p>
      //     )}
      //   </div>
      // );
    }
  };

  return (
    <section>
      <h1>LinkedList</h1>
      <div id="idPanelContainer">
        <div id="idLeftPanel">
          <fieldset id="idInputs" name="Data in LinkedList">
            <legend>Inputs</legend>
            Subject :
            <input
              id="subject"
              name="subject"
              type="text"
              className="left-input"
              placeholder="Enter Subject"
              value={subject}
              onChange={subjectInputChange}
            />
            <br />
            Amount:
            <input
              id="amount"
              name="amount"
              type="number"
              className="left-input"
              placeholder="Enter Amount"
              step="0.01"
              value={amount}
              onChange={amountInputChange}
              onKeyPress={pressEnter}
            />
            <br />
            <button
              type="button"
              className="btn btn-secondary"
              name="enterButton"
              onClick={pressEnter}
            >
              Enter
            </button>
          </fieldset>
          <br />
          <button
            onClick={handleFirst}
            id="reset"
            variant="primary"
            name="first"
          >
            Sel. First
          </button>
          <button
            onClick={handlePrevious}
            id="reset"
            variant="primary"
            name="prev"
          >
            Previous
          </button>
          {/*  I dont need this, as I always insert at current postion */}
          {/* <Button onClick={handleInsert} id="reset" variant="primary">
            <b style={{ color: "white" }}>{"[Add @ Current]"}</b>
          </Button> */}
          <button
            onClick={handleDelete}
            id="reset"
            variant="primary"
            name="delete"
          >
            Delete Current
          </button>
          <button onClick={handleNext} id="reset" variant="primary" name="next">
            "Next"
          </button>
          <button onClick={handleLast} id="reset" variant="primary" name="last">
            Sel. Last
          </button>
        </div>

        <div id="idRightPanel">{renderNodes()}</div>
      </div>
    </section>
  );
}

export default LList;
