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

describe('Scrabble', function() {
  it('scores an empty word as zero',function() {
    expect(score('')).toEqual(0);
  });

  it('scores a null as zero',function() {
    expect(score(null)).toEqual(0);
  });

  it('scores a very short word',function() {
    expect(score('a')).toEqual(1);
  });

  it('scores the word by the number of letters',function() {
    expect(score('street')).toEqual(6);
  });

  it('scores more complicated words with more',function() {
    expect(score('quirky')).toEqual(22);
  });

  it('scores case insensitive words',function() {
    expect(score('OXYPHENBUTAZONE')).toEqual(41);
  });
});
