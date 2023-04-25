def migratoryBirds(arr):
	keys = {}
	count = {"id": 0, "total": 0}

	for id in arr:
		if not id in keys:
			keys[id] = 0
		keys[id] += 1

		if keys[id] > count["total"]:
			count["total"] = keys[id]
			count["id"] = id
		if keys[id] == count["total"]:
			lowestId = count["id"] if id > count["id"] else id
			count["id"] = lowestId

	return count["id"]


input = [1, 4, 4, 4, 5, 3]
input2 = [5, 5, 5, 5, 0, 0, 2, 2, 2, 2]
result = migratoryBirds(input)
result2 = migratoryBirds(input2)

print(
	"Given this values:\n",
	input,
	"\n",
	input2,
	"\nReturn:\n",
	result,
	result2,
)
