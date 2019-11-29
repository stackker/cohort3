const fetch = require("node-fetch");
const fetchFunc = {

	// getFirstName: (data) => {
	// 	// to return the first persons' name (in the correct TDD order of course)
	// 	console.log("testing first Name")
	// 	return data[0].name;

	// },
	// getAllFirstNames: (data) => {
	// 	let arrName = [];
	// 	for (let objkt of data) {
	// 		arrName.push(objkt.name);
	// 	}
	// 	return arrName;
	// },

	

    url: 'https://uinames.com/api/?amount=10',

    getFirstName(data) {
        return (data[0].name);
    },

    getAllFirstNames(data) {
        return data.map((d, i, x) => d.name);
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
			try {
					const response = await fetch(fetchFunc.url);
					const data = await response.json();
					return data;
			} catch (error) {
					console.error('Error:', error);
					throw (error);
			}
	},


    async workWithData() {
        const data = await fetchFunc.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    },


	
}




export default fetchFunc;
