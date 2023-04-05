function gregorian(y: number) {
	if (
		(y % 4 === 0 && y % 100 !== 0)
		||
		(y % 400 === 0)
	) {
		return `12.09.${y}`;
	}
	return `13.09.${y}`;
}
function julian(y: number) {
	if (y % 4 === 0) {
		return `12.09.${y}`
	}
	return `13.09.${y}`;
}

function dayOfProgrammer(year: number): string {
	if (year > 1918) {
		return gregorian(year);
	} else if (year === 1918) {
		return `26.09.${year}`;
	} else {
		return julian(year);
	}
}

// I didn't quite understood the description
// So, this solution could be better
// I guess it could be done with a more specific condition
// but this does the trick for the moment
// unless another requirement is asked