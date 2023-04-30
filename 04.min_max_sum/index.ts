function miniMaxSum(arr: number[]): void {
    let minSum = 0;
    let maxSum = 0;
    
    const innerArray = [...arr];
    const length = innerArray.length;
    innerArray.sort();

    for (let i = 0; i < length; i++) {
        if (i < (length - 1)) {
            minSum += innerArray[i];
        }
        if ((i + 1) < length) {
            maxSum += innerArray[i + 1];
        }
    }

    console.log(minSum, maxSum);
}

const input = [1, 2, 3, 4, 5]; // print: 10, 14
const input2 = [426980153, 354802167, 142980735, 968217435, 734892650]; // print: 1659655705 2484892405

console.log(
    "Given this values:\n",
    input,
    "\n",
    input2,
    "\nResults:"
);

miniMaxSum(input);
miniMaxSum(input2);