function diagonalDifference(arr: number[][]): number {
    let totalL: number = 0;
    let totalR: number = 0;
    
    arr.forEach((e, i) => {
        totalL += e[i];
        totalR += e[(e.length - 1) - i];
    })
    
    const x = totalL - totalR
    return Math.abs(x);
}

const input = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]; // output 2 (totalL = 15, totalR = 17 (not the values of this input matrix))

console.log(diagonalDifference(input))