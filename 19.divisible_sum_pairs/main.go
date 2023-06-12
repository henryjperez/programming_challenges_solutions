package main

import "fmt"

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
func divisibleSumPairs(n int32, k int32, ar []int32) int32 {
	var pairCount int32 = 0
	for i := int32(0); i < n; i++ {
		current := ar[i]
		for index := i + 1; index < n; index++ {
			next := ar[index]
			if (current+next)%k == 0 {
				pairCount++
			}
		}
	}
	return pairCount
}

type Input struct {
	n, k int32
	ar   []int32
}

func main() {
	ar := []int32{1, 3, 2, 6, 1, 2}
	var n int32 = int32(len(ar))
	var k int32 = 3

	input := Input{n, k, ar}
	result := divisibleSumPairs(n, k, ar)

	fmt.Println(
		"Given this values:\n",
		input,
		"\nReturn:\n",
		result,
	)
}
