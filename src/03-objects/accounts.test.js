import * as oo from "./accounts.js";
describe("Testing Account properties and methods", () => {
    const Acct = new oo.Accounts("checkingAccount", 25)

    test("check testing", () => {
        console.log("From 03-objects-functions.test.js");
    });

    test("check Paramenter Passing", () => {
        //console.log(Acct)
        expect(Acct.accName).toBe("checkingAccount");
        expect(Acct.bal).toBe(25);

    });

    test("check method bal", () => {
        //console.log(Acct)
        expect(Acct.getbalance()).toBe(25);
    });
    test("check method deposit", () => {
        //console.log(Acct)
        expect(Acct.deposit(10)).toBe(35);
        expect(Acct.deposit(-20)).toBe("Deposit Amt must be greater than 0")
    });

    test("check method withdrawal", () => {
        //console.log(Acct)
        expect(Acct.withdraw(30)).toBe(5);
        expect(Acct.withdraw(-20)).toBe("Withdrawn Amt must be greater than 0");
    });
})
describe('Account Controller Tests', () => {
    let accountManager = new oo.AccountController();

    test('Check Account creation', () => {
        accountManager.createAccount("Savings Account", 100)
        expect(accountManager.accountList[0].accName).toEqual("Savings Account");
        expect(accountManager.accountList[0].bal).toEqual(100)
        accountManager.createAccount("Checking Account", 200);
        expect(accountManager.accountList[1]).toEqual({ accName: "Checking Account", bal: 200 })
        //   console.log(accountManager.accountList)

    });


    test('Check Account removal', () => {
        //   console.log(accountManager.accountList)
        accountManager.removeAccount("Savings Account")
        expect(accountManager.accountList[0]).toEqual({ "accName": "Checking Account", "bal": 200 });
        expect(accountManager.accountList).toEqual([{ "accName": "Checking Account", "bal": 200 }]);
        // console.log(accountManager.accountList)
        accountManager.removeAccount("Checking Account");
        expect(accountManager.accountList).toEqual([]);
    });

    test('Check Account Total', () => {

        accountManager.createAccount("Savings Account", 2000);
        accountManager.createAccount("Checking Account", 1000);
        expect(accountManager.totalAccounts()).toEqual(3000);
    });

    test('Check Account with Highest bal', () => {
        let accountManager = new oo.AccountController();
        accountManager.createAccount("Checking Account1", 10);
        accountManager.createAccount("Checking Account", 1000);
        accountManager.createAccount("Savings Account1", 200);
        // console.log("Begin Highest: ", accountManager.accountList)
        expect(accountManager.highestAccount()).toEqual({ accName: 'Checking Account', bal: 1000 });
    });
        

    test('Check Account with Lowest bal', () => {
        let accountManager = new oo.AccountController();
        accountManager.createAccount("Checking Account1", 10);
        accountManager.createAccount("Checking Account", 1000);
        accountManager.createAccount("Savings Account1", 200);
        // console.log("Begin Lowest ", accountManager.accountList)
        expect(accountManager.lowestAccount()).toEqual({ "accName": "Checking Account1", "bal": 10 });
		});
		
		test.only('Check createDeposit ', () => {
			let accountManager = new oo.AccountController();
        accountManager.createAccount("Checking Account1", 10);
        accountManager.createAccount("Checking Account", 1000);
				accountManager.createAccount("Savings Account1", 200);
				expect(accountManager.postDeposit("Checking Account1",2000)).toEqual({ "accName": "Checking Account1", "bal": 2010 });
		});
				

});

