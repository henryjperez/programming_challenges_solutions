package main

import (
	"fmt"
)

func gradingStudents(grades []int32) []int32 {
	var result = []int32{}

	for _, grade := range grades {
		var multiple int32 = 5
		var leftover int32 = grade % multiple
		var difference int32 = multiple - leftover
		var isRoundAndPassed = !(difference >= 3) && !(grade < 38)

		if isRoundAndPassed {
			result = append(result, grade+difference)
		} else {
			result = append(result, grade)
		}
	}

	return result
}

func main() {
	var input = []int32{73, 67, 38, 33}
	var result = gradingStudents(input) // output [75, 67, 40, 33]
	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
