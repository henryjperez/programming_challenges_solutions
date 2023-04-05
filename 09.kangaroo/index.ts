function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    let answer = "NO";
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) > 0 && (v1 - v2) > 0) {
        answer = "YES";
    }
    return answer;
}
