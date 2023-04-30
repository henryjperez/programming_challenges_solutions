function extraLongFactorials(n: number) {
	let factorial: bigint = BigInt(1);
	for(let i = 1; i < n + 1; i++) {
		factorial *= BigInt(i);
	}
	console.log(factorial.toString());
}


const input = 25;
console.log(
	"Given this values:\n",
	input,
	"\nResult:",
);
extraLongFactorials(input);