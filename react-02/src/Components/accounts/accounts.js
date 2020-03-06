import React, { Component } from "react";
import "./accounts.css";
import AccountController from "./accountPSC.js";
import AccountCard from "./accountCard.js";

class Accounts extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      startingBalanceInput: "",
      totalDisplay: "",
      highestDisplay: "",
      lowestDisplay: ""
    };
    this.accountManager = new AccountController();
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCreateNewAccount = () => {
    //minor validition
    //get values from inputs
    //call pojo create handler
    if (this.state.nameInput != "") {
      this.accountManager.createAccount(
        this.state.nameInput,
        this.state.startingBalanceInput
      );
      this.calculate();

      this.setState({
        nameInput: "",
        startingBalanceInput: ""
      });
    } else {
      alert("The Account Name cannot be blank");
    }
  };

  handleDelete = accountName => {
    this.accountManager.removeAccount(accountName);
    if (this.accountManager.accountList.length !== 0) {
      this.calculate();
    }
    this.setState({
      nameInput: ""
    });
  };

  calculate = () => {
    this.setState({
      totalDisplay: this.accountManager.totalAccounts(),
      highestDisplay: this.accountManager.highestAccount().balance,
      lowestDisplay: this.accountManager.lowestAccount().balance
    });
  };

  renderCards = () => {
    if (this.accountManager.accountList.length !== 0) {
      return this.accountManager.accountList.map(accountEach => {
        return (
          <AccountCard
            key={accountEach.accountName}
            account={accountEach}
            calculate={this.calculate}
            removeAccount={this.handleDelete}
          />
        );
      });
    }
  };
  renderStats = () => {
    console.log(":", this.accountManager.accountList.length);
    if (this.accountManager.accountList.length !== 0) {
      return (
        <div>
          <p id="display">
            Total Balance of Accounts: {this.state.totalDisplay}
          </p>
          <p id="display">Highest Account: {this.state.highestDisplay}</p>
          <p id="display">Lowest Account: {this.state.lowestDisplay}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <section>
        <h2> My Accounts </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">
            Account Manager
            <input
              id="input1"
              type="text"
              placeholder="Add an Account Name"
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleInputChange}
            />
            <input
              id="input2"
              type="number"
              placeholder="Enter initial balance"
              name="startingBalanceInput"
              value={this.state.startingBalanceInput}
              onChange={this.handleInputChange}
            />
            <button
              className="addBalance"
              id="idAddBalance"
              onClick={this.handleCreateNewAccount}
            >
              Create New Account
            </button>
            {/* <h2> Account List </h2> */}
            {this.renderCards()}
          </div>

          <div id="idRightPanel" className="rightPanel">
            <h3>My Current Balances</h3>
            {/* {this.accountManager.accountList.length !== 0 && this.renderStats()} */}
            {this.renderStats()}
          </div>
        </div>
      </section>
    );
  }
}

export default Accounts;
