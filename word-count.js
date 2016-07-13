function count(string) {

	string = string.trim().toLowerCase().replace(/[\n\t+]/g, " ").replace(/ +/g, " ").split(" ");
	var words = string;
	var word = string;

	var a = new Object();
	for (var i = 0; i < words.length; ++i) {
		    var counter = false;
		for (var j = 0; j < word.length; ++j) {

			if (words[i] == word[j])
				++counter;
			if (counter > 0)
				a[[words[i]]] = counter;
		}
	}
	return (a);
};

console.log(count('word word word'));
