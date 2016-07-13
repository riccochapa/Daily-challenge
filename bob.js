function hey(string) {
  if (string === string.toUpperCase() && string !== string.toLowerCase()) {
    return 'Whoa, chill out!';
  } else if (string.trim().slice(-1) === '?') {
    return 'Sure.';
  } else if (string.trim() == 0) {
    return 'Fine. Be that way!';
  } return 'Whatever.';
}

console.log(hey('How are you?'));
console.log(hey('WTF?'));
console.log(hey(''));
console.log(hey('sadfasdf'));
