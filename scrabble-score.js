function score(string) {
  string.toUpperCase();
  let total = 0;
  if (string == null) {
    total += 0;
  }
  for (let i = 0; i <= string.length; i++) {
  switch (string[i]) {
    case "Q": case "Z": total += 10; break;
    case "J": case "X": total += 8; break;
    case "K": total += 5; break;
    case "F": case "H": case "V": case "W": case "Y": total += 4; break;
    case "B": case "C": case "M": case "P": total += 3; break;
    case "D": case "G": total += 2; break;
    case "A": case "E": case "I": case "O": case "U": case "L": case "N": case "R": case "S": case "T": total += 1; break;
	 default: total += 0;
  };
  return total;
};
