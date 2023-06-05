function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let count = 0;
    for (let i = 0; i < n; i++) {
        const current = ar[i];
        const pairs = ar.filter((item, index) => ((current + item) % k === 0) && (index > i));
        count += pairs.length;
    }
    return count;
}