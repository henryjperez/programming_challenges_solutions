package main

import "fmt"

func bonAppetit(bill []int32, k int32, b int32) {
	var total int32
	for _, value := range bill {
		total += value
	}
	totalSplit := total / 2

	exceptionItem := bill[k]
	exceptionSplit := exceptionItem / 2

	annaHasToPay := totalSplit - exceptionSplit
	annaCharge := b - annaHasToPay
	isAnnaOverCharged := annaCharge > 0

	if isAnnaOverCharged {
		fmt.Println(annaCharge)
	} else {
		response := "Bon Appetit"
		fmt.Println(response)
	}
}

func main() {
	billInput1 := []int32{3, 10, 2, 9}
	var indexKInput1 int32 = 1
	var annaBillInput1 int32 = 12

	billInput2 := []int32{3, 10, 2, 9}
	var indexKInput2 int32 = 1
	var annaBillInput2 int32 = 7

	fmt.Println(
		"Given this values:\n",
		billInput1, indexKInput1, annaBillInput1,
		"\nReturn:",
	)
	bonAppetit(billInput1, indexKInput1, annaBillInput1)

	fmt.Println(
		"Given this values:\n",
		billInput2, indexKInput2, annaBillInput2,
		"\nReturn:",
	)
	bonAppetit(billInput2, indexKInput2, annaBillInput2)
}
