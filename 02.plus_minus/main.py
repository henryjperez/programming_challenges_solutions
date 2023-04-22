def plusMinus(arr):
	positives = list(filter(lambda n: n > 0, arr))
	negatives = list(filter(lambda n: n < 0, arr))
	zeros = list(filter(lambda n: n == 0, arr))

	unnecessaryMatrix = [positives, negatives, zeros]
	[print(len(i)/len(arr)) for i in unnecessaryMatrix]


input = [-4, 3, -9, 0, 4, 1]
print(input)
plusMinus(input)