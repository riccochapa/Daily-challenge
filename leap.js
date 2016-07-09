const leap = {};
const customAlert = alert;
if (leap % 4 === 0 && leap % 100 !== 0 || leap % 400 === 0) {
  customAlert('Leap Year!');
} else {
  customAlert('Not a Leap Year!');
}
