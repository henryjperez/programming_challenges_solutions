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