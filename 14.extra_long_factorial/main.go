package main

import (
	"fmt"
	"math/big"
)

func extraLongFactorials(n int32) {
	factorial := big.NewInt(1)
	for i := 1; i < int(n+1); i++ {
		factorial.Mul(factorial, big.NewInt(int64(i)))
	}
	fmt.Println(factorial)
}

func main() {
	var input int32 = 25
	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
	)
	extraLongFactorials(input)
}
