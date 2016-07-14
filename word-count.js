function count(string) {
	string = string.trim().toLowerCase().replace(/[\n\t+]/g, " ").replace(/ +/g, " ").split(" ");

	const a = new Object();
	for (let i = 0; i < string.length; ++i) {
		    let counter = false;
		for (let j = 0; j < string.length; ++j) {
			if (string[i] === string[j]) {
				++counter;
			}
			if (counter > 0) {
				a[[string[i]]] = counter;
			}
		}
		return a;
	}
};

console.log(count('word word word'));
