package main

import "fmt"

func countApplesAndOranges(s int32, t int32, a int32, b int32, apples []int32, oranges []int32) {
	var applesLanded = []int32{}
	var orangesLanded = []int32{}
	var loop int = len(apples)
	overlapper := func(item int32, startPoint int32, overlapStart int32, overlapEnd int32) bool {
		var landing int32 = item + startPoint
		return (landing >= overlapStart) && (landing <= overlapEnd)
	}
	if len(oranges) > len(apples) {
		loop = len(oranges)
	}

	for i := 0; i < loop; i++ {
		if len(apples) > i {
			apple := apples[i]
			isOverlapped := overlapper(apple, a, s, t)
			if isOverlapped {
				applesLanded = append(applesLanded, apple)
			}
		}
		if len(oranges) > i {
			orange := oranges[i]
			isOverlapped := overlapper(orange, b, s, t)
			if isOverlapped {
				orangesLanded = append(orangesLanded, orange)
			}
		}
	}

	fmt.Println(len(applesLanded))
	fmt.Println(len(orangesLanded))
}

func main() {
	var s int32 = 7
	var t int32 = 11
	var a int32 = 5
	var b int32 = 15
	apples := []int32{-2, 2, 1}
	oranges := []int32{5, -6}

	fmt.Println(
		"Given this values:\n",
		s, t, a, b, apples, oranges,
		"\nResult:",
	)

	countApplesAndOranges(s, t, a, b, apples, oranges)
}
