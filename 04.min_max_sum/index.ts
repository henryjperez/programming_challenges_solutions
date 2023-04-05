function miniMaxSum(arr: number[]): void {
    const innerArray = [...arr];
    innerArray.sort();
    
    const firstItem = 0;
    const lastItem = innerArray.length - 1;
    
    const min = innerArray.slice(firstItem, lastItem);
    const max = innerArray.slice(firstItem + 1, lastItem + 1);
    
    const minSum = min.reduce((prev, current) => prev + current, 0);
    const maxSum = max.reduce((prev, current) => prev + current, 0);
    
    console.log(minSum, maxSum);
}

const input = [1, 2, 3, 4, 5]; // output console.log(10, 14)