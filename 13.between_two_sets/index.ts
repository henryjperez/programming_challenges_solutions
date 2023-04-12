function getTotalX(a: number[], b: number[]): number {
	let multiple = 0, gcd = b[0], lcm = a[0];
	
	for (let num of a) {
		lcm = setLCM(lcm, num);
	}
	for (let num of b) {
		gcd = setGCD(gcd, num);
	}
	let result = 0;
	while (multiple <= gcd) {
		multiple += lcm;

		if (gcd % multiple == 0) {
			result ++;
		}
	}
	return result;
}
function setGCD(n1: number, n2: number): number {
	if (n2 === 0) {
		return n1;
	}
	return setGCD(n2, n1 % n2);
}
function setLCM(n1: number, n2: number): number {
	if (n1 == 0 || n2 == 0) {
		return 0;
	}
	const gcd = setGCD(n1, n2);
	return Math.abs(n1 * n2) / gcd;
}

console.log(getTotalX([2, 4], [16, 32, 96]));