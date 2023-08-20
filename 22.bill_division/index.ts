function bonAppetit(bill: number[], k: number, b: number): void {
	const total = bill.reduce((prev, current) => prev + current, 0);
	const totalSplit = total / 2;

	const exceptionItem = bill[k] ?? 0;
	const exceptionSplit = exceptionItem / 2;

	const annaHasToPay = totalSplit - exceptionSplit;
	const annaCharge = b - annaHasToPay;
	const isAnnaOverCharged = annaCharge > 0;

	if (isAnnaOverCharged) {
		console.log(annaCharge);
	} else {
		const response = "Bon Appetit";
		console.log(response);
	}
}

const billInput1 = [3, 10, 2, 9];
const indexKInput1 = 1;
const annaBillInput1 = 12;


const billInput2 = [3, 10, 2, 9];
const indexKInput2 = 1;
const annaBillInput2 = 7;

console.log(
	"Given this values:\n",
	billInput1, indexKInput1, annaBillInput1,
	"\nReturn:",
);
bonAppetit(billInput1, indexKInput1, annaBillInput1);

console.log(
	"Given this values:\n",
	billInput2, indexKInput2, annaBillInput2,
	"\nReturn:",
);
bonAppetit(billInput2, indexKInput2, annaBillInput2);