function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    function overlaper(item: number, startPoint: number, overlapStart = s, overlapEnd = t,) {
        const landing = item + startPoint;
        return ((landing >= overlapStart) && (landing <= overlapEnd));
    }
    
    const applesLanded = apples.filter(apple => overlaper(apple, a));
    const orangesLanded = oranges.filter(orange => overlaper(orange, b));
    
    console.log(applesLanded.length);
    console.log(orangesLanded.length);
}

const input = [7, 11, 5, 15, [-2, 2, 1], [5, -6]]
console.log(
    "Given this values:\n",
    input,
    "\nResult:",
);
countApplesAndOranges(...input)

// The most optimized implementation of this solution is the one in: main.go