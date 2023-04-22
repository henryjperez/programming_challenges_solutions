package main

import (
	"fmt"
)

func plusMinus(arr []int32) {
	var positives []int32
	var negatives []int32
	var zeros []int32

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

	unnecessaryMatrix := [3][]int32{positives, negatives, zeros}
	for _, e := range unnecessaryMatrix {
		fmt.Println(float32(len(e)) / float32(len(arr)))
	}
}

func main() {
	input := []int32{-4, 3, -9, 0, 4, 1}
	fmt.Println(input)
	plusMinus(input)
}
