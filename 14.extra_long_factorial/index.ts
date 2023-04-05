function extraLongFactorials_not_quite_working(n: number): void {
    const factors = [...Array(n).keys()];
    const factorial = factors.reduce((prev, init) => prev * (init + 1), 1);
    console.log(factorial.toString());
}

function extraLongFactorials(n: number) {
	let factorial: bigint = BigInt(1);
	for(let i = 1; i < n + 1; i++) {
		factorial *= BigInt(i);
	}
	console.log(factorial.toString());
}