var compute = function(dna1, dna2) {
	var difference = 0;

	for (var i = 0; i <= dna1.length && dna2.length; i++) {
		if (dna1[i] != dna2[i]) {
			++difference
		}
	}
	return difference;
};

console.log(compute('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'));
