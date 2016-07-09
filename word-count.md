#Word Count

Write a program that given a phrase can count the occurrences of each word in that phrase.

For example for the input `"olly olly in come free"`

```plain
olly: 2
in: 1
come: 1
free: 1
```
##Use for testing with Jasmine 2.3.4:

var isNotCapitalLetter = function(letter){
	var dec = letter.charCodeAt(0);
	return (dec < 65 || dec > 90);
};

var isWordAllCaps = function(word){
	return !word.split('').filter(isNotCapitalLetter).length
}

var isYelling = function(string){
	var words = string.split(' ');
	var hasAllCapsWord = false;
	words.forEach(function(word){
		if (hasAllCapsWord) return;
		if (isWordAllCaps(word)) hasAllCapsWord = true;
	});
  	return hasAllCapsWord;
};

var isYelling = function(string){
	return string.split(' ').some(isWordAllCaps);
};

var isYelling = function(string){
	return !(/[a-z]+/).test(string) && (/[A-Z]+/).test(string);
};

console.clear();
console.assert(isYelling('1 ,2,3') == false);
console.assert(isYelling('I am YELLING') == false);
console.assert(isYelling('ALL MY LETTERS') == true);
