package main

import (
	"fmt"
	"strings"
)

func staircase(n int32) {
	tree := make([]string, n)
	for i := range tree {
		tree[i] = " "
	}
	for i := n; i > 0; i-- {
		tree[i-1] = "#"
		var printTree string = strings.Join(tree, "")
		fmt.Println(printTree)
	}
}

func main() {
	staircase(6)
}
