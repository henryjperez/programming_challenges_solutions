function angryProfessor(k: number, a: number[]): string {
    const students = a.reduce((prev, current) => {
        if (current <= 0) return prev + 1;
        return prev;
    }, 0);
    if (students >= k) return "NO";
    return "YES";
}