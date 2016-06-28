replace the first letter with the last letter until I get to the middle.

hello, boat, holy moly

function reverseString(str) {

    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

console.log(reverseString('hello'));
console.log(reverseString('boat'));
console.log(reverseString('holy moly'));
