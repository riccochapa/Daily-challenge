function count(string) {
  string.trim().toLowerCase().replace(/[\n\t+]/g, ' ')
	.replace(/ +/g, ' ')
	.split(' ');

  const tally = new {};
  for (let i = 0; i < string.length; ++i) {
    let counter = 0;
    for (let j = 0; j < string.length; ++j) {
      if (string[i] === string[j]) {
        ++counter;
      }
      if (counter > 0) {
	a[[string[i]]] = counter;
      }
    } return (tally);
};
