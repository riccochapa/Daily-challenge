var leap = prompt("enter a year");

if (leap % 4 === 0 && leap % 100 !== 0 || leap % 400 === 0){
  window.alert("Leap Year!");
} else {
  window.alert("Not a Leap Year!")
}
