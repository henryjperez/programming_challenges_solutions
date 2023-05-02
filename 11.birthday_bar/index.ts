function birthday(s: number[], d: number, m: number): number {
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		const fragment = s.slice(i, m + i);
		if (fragment.length === m) {
			const sum = fragment.reduce((prev, init) => prev + init, 0);
			if (sum === d) {
				result++
			};
		}
	}
	return result;
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

const input = [s, d, m];
const result = birthday(s, d, m);
console.log(
	"Given this values:\n",
	...input,
	"\nResult:",
	result,
);