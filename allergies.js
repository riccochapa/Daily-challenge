const Allergies = function allergies(score) {
  const selectedAllergens = [];
  const finalAllergens = [];
  score = score % 256;

  const allergensAndScore = [
		['eggs', 1],
		['peanuts', 2],
		['shellfish', 4],
		['strawberries', 8],
		['tomatoes', 16],
		['chocolate', 32],
		['pollen', 64],
		['cats', 128],
  ];

  for (var i = 0; i < allergensAndScore.length; i++) {
    const allergen = allergensAndScore[i][0];
    const grade = allergensAndScore[i][1];
    if (score >= grade) {
      selectedAllergens.push(allergensAndScore[i]);
    } else {
      break;
    }
  }

  if (selectedAllergens[--i]) {
    finalAllergens.push(selectedAllergens[i]);
    let currentScore = score - selectedAllergens[i][1];
    for (let j = (i - 1); j >= 0; j--) {
      const nextScore = currentScore - selectedAllergens[j][1];
      if (nextScore >= 0) {
        finalAllergens.push(selectedAllergens[j]);
        currentScore = currentScore - selectedAllergens[j][1];
      }
    }
  }

  Allergies.prototype.list = function lists() {
    return (finalAllergens.map(function list(allergen) {
      return allergen[0];
    }).reverse());
  };

  Allergies.prototype.allergicTo = function check(potentialAllergen) {
    return (this.list().indexOf(potentialAllergen) >= 0);
  };
  return finalAllergens;
};

console.log(Allergies(34));
