package main

import (
	"fmt"
	"sort"
)

func birthdayCakeCandles(candles []int32) int32 {
	// copying slice to avoid modifying the original one
	var candleList = make([]int32, len(candles))
	var tallest = []int32{}
	copy(candleList, candles)

	sort.Slice(candleList, func(i, j int) bool {
		return candleList[i] < candleList[j]
	})
	for _, e := range candleList {
		var isEqualToLastItem bool = e == candleList[len(candleList)-1]
		if isEqualToLastItem {
			tallest = append(tallest, e)
		}
	}
	var result int32 = int32(len(tallest))

	return result
}

func main() {
	var input = []int32{4, 3, 1, 4}
	var result int32 = birthdayCakeCandles(input)
	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
