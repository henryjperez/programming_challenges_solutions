package main

import "fmt"

func angryProfessor(k int32, a []int32) string {
	var notLateCount int32 = 0
	var answer string = "YES"

	for _, studentArrival := range a {
		if studentArrival <= 0 {
			notLateCount++
		}
	}

	if notLateCount >= k {
		answer = "NO"
	}

	return answer
}

func main() {
	var k int32 = 3
	a := []int32{-1, -3, 4, 2}
	input := []interface{}{k, a}

	result := angryProfessor(k, a)

	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
