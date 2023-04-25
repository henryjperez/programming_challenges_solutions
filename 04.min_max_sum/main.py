def miniMaxSum(arr):
	minSum = 0
	maxSum = 0

	new_list = []
	new_list.extend(arr)
	length = len(new_list)

	new_list.sort()

	for i, _ in enumerate(new_list):
		if i < (length - 1):
			minSum += new_list[i]
		if (i + 1) < length:
			maxSum += new_list[i + 1]

	print(minSum, maxSum)


input = [1, 2, 3, 4, 5] # print: 10, 14
input2 = [426980153, 354802167, 142980735, 968217435, 734892650] # print: 1659655705 2484892405

print(
    "Given this values:\n",
    input,
    "\n",
    input2,
    "\nResults:"
)

miniMaxSum(input)
miniMaxSum(input2)
