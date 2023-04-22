function plusMinus(arr: number[]): void {
	const positives = arr.filter(e => e > 0);
	const negatives = arr.filter(e => e < 0);
	const zeros = arr.filter(e => e === 0);

	const unnecessaryMatrix = [positives, negatives, zeros];
	unnecessaryMatrix.forEach(e => console.log(e.length / arr.length));
}

const input = [-4, 3, -9, 0, 4, 1];
console.log(input)
plusMinus(input);
/* 
PRINT:
0.500000
0.333333
0.166667
*/
