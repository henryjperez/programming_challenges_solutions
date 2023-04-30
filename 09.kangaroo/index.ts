function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    let answer = "NO";

    const distance = x2 - x1;
    const jumpDifference = v1 - v2;
    if (distance == 0 || jumpDifference == 0) {
        return answer
    }

    const isReachable = distance % jumpDifference === 0;
    const areHigherThanZero = distance > 0 && jumpDifference > 0;

    if (isReachable && areHigherThanZero) {
        answer = "YES";
    }
    return answer;
}

const x1 = 43;
const v1 = 2;
const x2 = 70;
const v2 = 2;
const input= [ x1, v1, x2, v2 ];

const result = kangaroo(x1, v1, x2, v2);

console.log(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
);