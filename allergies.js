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
};

describe('Allergies', function() {

	it('no allergies at all', function() {
		var allergies = new Allergies(0);
		expect(allergies.list()).toEqual([]);
	});

	it('allergies to eggs', function() {
		var allergies = new Allergies(1);
		expect(allergies.list()).toEqual(['eggs']);
	});

	it('allergies to peanuts', function() {
		var allergies = new Allergies(2);
		expect(allergies.list()).toEqual(['peanuts']);
	});

	it('allergies to strawberries', function() {
		var allergies = new Allergies(8);
		expect(allergies.list()).toEqual(['strawberries']);
	});

	it('allergies to eggs and peanuts', function() {
		var allergies = new Allergies(3);
		expect(allergies.list()).toEqual(['eggs', 'peanuts']);
	});

	it('allergies to more than eggs but not peanuts', function() {
		var allergies = new Allergies(5);
		expect(allergies.list()).toEqual(['eggs', 'shellfish']);
	});

	it('allergic to lots of stuff', function() {
		var allergies = new Allergies(248);
		expect(allergies.list()).toEqual(['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});

	it('allergic to everything', function() {
		var allergies = new Allergies(255);
		expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});

	it('no allergies means not allergic', function() {
		var allergies = new Allergies(0);
		expect(allergies.allergicTo('peanuts')).toEqual(false);
		expect(allergies.allergicTo('cats')).toEqual(false);
		expect(allergies.allergicTo('strawberries')).toEqual(false);
	});

	it('allergic to eggs', function() {
		var allergies = new Allergies(1);
		expect(allergies.allergicTo('eggs')).toEqual(true);
	});

	it('allergic to eggs and other things', function() {
		var allergies = new Allergies(5);
		expect(allergies.allergicTo('eggs')).toEqual(true);
	});

	it('ignore non allergen score parts', function() {
		var allergies = new Allergies(509);
		expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
	});
});
