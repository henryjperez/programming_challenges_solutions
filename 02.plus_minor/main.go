package main

import (
	"fmt"
)

func plusMinus(arr []int) {
	var positives []int
	var negatives []int
	var zeros []int

	for _, e := range arr {
		if e > 0 {
			positives = append(positives, e)
		}
		if e < 0 {
			negatives = append(negatives, e)
		}
		if e == 0 {
			zeros = append(zeros, e)
		}
	}

	unnecessaryMatrix := [3][]int{positives, negatives, zeros}
	for _, e := range unnecessaryMatrix {
		fmt.Println(float32(len(e)) / float32(len(arr)))
	}
}

func main() {
	input := []int{-4, 3, -9, 0, 4, 1}
	plusMinus(input)
}
