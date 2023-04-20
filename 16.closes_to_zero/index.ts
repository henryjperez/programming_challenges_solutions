function computeClosestToZero(ts: number[]): number {
    if (ts.length === 0) return 0;
    const closesTo = 0;
    const sortedBy = ts.sort((a, b) => {
        const first = Math.abs(a - closesTo);
        const second = Math.abs(b - closesTo);
        const result = first - second;
        if (result === 0) {
            if (a > b) return -1;
            if (b > a) return 1;
        }
        return first - second;
    });
    const result = sortedBy[0];

    return result;
}