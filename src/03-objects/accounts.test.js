import * as oo from "./accounts.js";
describe("Testing Account properties and methods", () => {
    const Acct = new oo.Accounts("checkingAccount", 25)

    test("check testing", () => {
        // console.log("From 03-objects-functions.test.js");
    });

    test("check Paramenter Passing", () => {
        //console.log(Acct)
        expect(Acct.accName).toBe("checkingAccount");
        expect(Acct.bal).toBe(25);

    });

    test("check method balance", () => {
        //console.log(Acct)
        expect(Acct.balance()).toBe(25);
    });
    test("check method deposit", () => {
        console.log(Acct)
        expect(Acct.deposit(10)).toBe(35);
        expect(Acct.deposit(-20)).toBe("Deposit Amt must be greater than 0")
    });

    test("check method withdrawal", () => {
        console.log(Acct)
        expect(Acct.withdraw(30)).toBe(5);
        expect(Acct.withdraw(-20)).toBe("Withdrawn Amt must be greater than 0");
    });
})
