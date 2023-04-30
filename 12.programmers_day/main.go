package main

import (
	"fmt"
)

func gregorian(y int32) string {
	if (y%4 == 0 && y%100 != 0) || (y%400 == 0) {
		return fmt.Sprintf("12.09.%d", y)
	}
	return fmt.Sprintf("13.09.%d", y)
}
func julian(y int32) string {
	if y%4 == 0 {
		return fmt.Sprintf("12.09.%d", y)
	}
	return fmt.Sprintf("13.09.%d", y)
}

func dayOfProgrammer(year int32) string {
	if year > 1918 {
		return gregorian(year)
	} else if year == 1918 {
		return fmt.Sprintf("26.09.%d", year)
	} else {
		return julian(year)
	}
}

func main() {
	var input int32 = 2017
	result := dayOfProgrammer(input)

	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
