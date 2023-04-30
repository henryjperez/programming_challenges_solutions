function angryProfessor(k: number, a: number[]): string {
    const students = a.reduce((prev, current) => {
        if (current <= 0) return prev + 1;
        return prev;
    }, 0);
    if (students >= k) return "NO";
    return "YES";
}

const k = 3;
const a = [-1, -3, 4, 2];
const input = [k, a];

const result = angryProfessor(k, a);

console.log(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
);