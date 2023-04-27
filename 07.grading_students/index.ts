function gradingStudents(grades: number[]): number[] {
    const result = grades.map(grade => {
        const multiple = 5
        const leftover = grade % multiple;
        const difference = multiple - leftover;
        
        if (grade < 38) return grade;
        if (!(difference >= 3)) return grade + difference;
        
        return grade;
    })
    return result;
}

const input = [73, 67, 38, 33,];
const result = gradingStudents(input); // output [75, 67, 40, 33]

console.log(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
);