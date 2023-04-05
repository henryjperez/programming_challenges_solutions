package main

import (
	"fmt"
	"math"
)

func diagonalDifference(arr [][]int32) int32 {
	var totalL int32
	var totalR int32

	for i, e := range arr {
		totalL += e[i]
		totalR += e[len(arr)-1-i]
		fmt.Println(i, e, e[i], totalL, totalR)
	}
	var x int32 = int32(math.Abs(float64(totalL) - float64(totalR)))
	return x
}

func main() {

}
