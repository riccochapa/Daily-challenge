'use strict'

function count(string) {

  var regex = / /g;
  console.log(string.match(regex).length + 1);

};

count('in a normal sentence another word with you.');
