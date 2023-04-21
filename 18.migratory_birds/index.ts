function migratoryBirds(arr: number[]): number {
	const keys: number[] = [];
	const counts = {};
	for (let i = 0; i < arr.length; i++) {
		const id = arr[i];
		if (typeof (counts[id]) === "number") {
			counts[id] += 1;
		} else {
			counts[id] = 1;
		}

		if (keys[0]) {
			if (counts[keys[0]] < counts[id]) {
				keys[0] = counts[id];
			} else if (counts[keys[0]] === counts[id]) {

			}
		}
	}
}