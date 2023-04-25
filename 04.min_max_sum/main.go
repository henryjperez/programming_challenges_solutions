package main

import (
	"fmt"
	"sort"
)

func miniMaxSum(arr []int32) {
	var minSum int64
	var maxSum int64
	var length int = len(arr)
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})

	for i, item := range arr {
		if i < length-1 {
			minSum += int64(item)
		}
		if (i + 1) < length {
			maxSum += int64(arr[i+1])
		}
	}
	fmt.Println(minSum, maxSum)
}

func main() {
	var input = []int32{1, 2, 3, 4, 5}
	var input2 = []int32{426980153, 354802167, 142980735, 968217435, 734892650}

	fmt.Println(
		"Given this values:\n",
		input,
		"\n",
		input2,
		"\nResults:",
	)

	miniMaxSum(input)
	miniMaxSum(input2)
}
