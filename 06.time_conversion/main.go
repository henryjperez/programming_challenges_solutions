package main

import (
	"fmt"
	"strconv"
	"strings"
)

func timeConversion(s string) string {
	var t string = s[2 : len(s)-2]
	var h string = s[:2]
	hour, _ := strconv.Atoi(h)
	var time string = strings.ToUpper(s[len(t)+2:])

	if time == "AM" {
		if hour == 12 {
			return "00" + t
		}
		return h + t
	}

	if hour < 12 {
		hour += 12
	}

	return fmt.Sprintf("%d%s", hour, t)
}

func main() {
	// var input string = "07:05:45PM"
	var input string = "12:05:45AM"
	result := timeConversion(input)

	fmt.Println(
		"Given this values:\n",
		input,
		"\nResult:",
		result,
	)
}
