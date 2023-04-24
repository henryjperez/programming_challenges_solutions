function migratoryBirds(arr: number[]): number {
	interface ICount {
		id: number | null;
		total: number;
	}
	const keys: number[] = [];
	const count: ICount = { id: null, total: 0 };

	for (let i = 0; i < arr.length; i++) {
		const id = arr[i];
		if (!keys[id]) {
			keys[id] = 0;
		}
		keys[id] += 1;

		if (keys[id] > count.total) {
			count.total = keys[id];
			count.id = id;
		}
		if (keys[id] === count.total) {
			const lowestId = id > Number(count.id) ? count.id : id;
			count.id = lowestId;
		}
	}
	return Number(count.id);
}

const input = [1, 4, 4, 4, 5, 3];
const input2 = [5, 5, 5, 5, 0, 0, 2, 2, 2, 2];
const result = migratoryBirds(input);
const result2 = migratoryBirds(input2);

console.log(
	"Given this values:\n",
	input,
	"\n",
	input2,
	"\nReturn:\n",
	result,
	result2,
);