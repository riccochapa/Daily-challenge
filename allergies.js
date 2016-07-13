var Allergies = function(score) {

	var selectedAllergens = [];
	var finalAllergens = [];
	score = score % 256;

	var allergensAndScore = [
		["eggs", 1],
		["peanuts", 2],
		["shellfish", 4],
		["strawberries", 8],
		["tomatoes", 16],
		["chocolate", 32],
		["pollen", 64],
		["cats", 128],
	];

	for (var i = 0; i < allergensAndScore.length; i++) {
		var allergen = allergensAndScore[i][0];
		var grade = allergensAndScore[i][1];
		if (score >= grade) {
			selectedAllergens.push(allergensAndScore[i]);
		} else {
			break;
		}
	}

	if (selectedAllergens[--i]) {
		finalAllergens.push(selectedAllergens[i]);
		var currentScore = score - selectedAllergens[i][1];
		for (var j = (i - 1); j >= 0; j--) {
			var nextScore = currentScore - selectedAllergens[j][1];
			if (nextScore >= 0) {
				finalAllergens.push(selectedAllergens[j]);
				currentScore = currentScore - selectedAllergens[j][1];
			}
		}
	}

	Allergies.prototype.list = function() {
		return (finalAllergens.map(function(allergen) {
			return allergen[0];
		}).reverse());
	};

	Allergies.prototype.allergicTo = function(potentialAllergen) {
		return (this.list().indexOf(potentialAllergen) >= 0);
	};
	return finalAllergens;
};

console.log(Allergies(34));
