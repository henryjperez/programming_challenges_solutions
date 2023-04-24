package main

import "fmt"

type Count struct {
	id    int32
	total int32
}

func migratoryBirds(arr []int32) int32 {
	keys := make(map[int32]int32, 0)
	count := Count{
		id:    0,
		total: 0,
	}
	fmt.Println(keys, count)

	for _, id := range arr {
		_, idExists := keys[id]
		if !idExists {
			keys[id] = 0
		}
		keys[id]++

		if keys[id] > count.total {
			count.total = keys[id]
			count.id = id
		}
		if keys[id] == count.total {
			var lowestId int32 = id
			if id > count.id {
				lowestId = count.id
			}
			count.id = lowestId
		}

	}

	return count.id
}

func main() {
	input := []int32{1, 4, 4, 4, 5, 3}
	input2 := []int32{5, 5, 5, 5, 0, 0, 2, 2, 2, 2}
	result := migratoryBirds(input)
	result2 := migratoryBirds(input2)
	fmt.Println(
		"Given this values:\n",
		input,
		"\n",
		input2,
		"\nReturn:\n",
		result,
		result2,
	)
}
