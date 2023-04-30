package main

import (
	"fmt"
)

func kangaroo(x1 int32, v1 int32, x2 int32, v2 int32) string {
	var answer string = "NO"

	var distance = x2 - x1
	var jumpDifference = v1 - v2
	if distance == 0 || jumpDifference == 0 {
		return answer
	}

	var isReachable bool = distance%jumpDifference == 0
	var areHigherThanZero bool = distance > 0 && jumpDifference > 0
	if isReachable && areHigherThanZero {
		answer = "YES"
	}
	return answer
}

func main() {
	var x1 int32 = 43
	var v1 int32 = 2
	var x2 int32 = 70
	var v2 int32 = 2
	input := []int32{x1, v1, x2, v2}

	result := kangaroo(x1, v1, x2, v2)

	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
