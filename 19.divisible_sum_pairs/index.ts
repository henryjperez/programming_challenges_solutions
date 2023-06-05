/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let pairCount = 0;
    for (let i = 0; i < n; i++) {
        const current = ar[i];
        for (let index = i + 1; index < n; index++) {
            const next = ar[index];
            if ((current + next) % k === 0) {
                pairCount++;
            }
        }
    }
    return pairCount;
}

const ar = [1, 3, 2, 6, 1, 2];
const n = ar.length;
const k = 3;

const input = {n, k, ar};
const result = divisibleSumPairs(n, k, ar);

console.log(
    "Given this values:\n",
    input,
    "\nReturn:\n",
    result,
);