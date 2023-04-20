function sumDigits(num: number): number {
	const value = String(num);
	const digitsList = value.split("");
	const result = digitsList.reduce((prev, current) => String(parseInt(prev) + parseInt(current)), value);
	return Number(result);
}

function jointPoint(s1: number, s2: number) {
	let num1 = s1;
	let num2 = s2;

	while(num1 !== num2) {
		if (num1 < num2) {
			num1 = sumDigits(num1);
		} else if (num2 < num1) {
			num2 = sumDigits(num2);
		}
	}
	return sumDigits(num1);
}

jointPoint(57, 78);