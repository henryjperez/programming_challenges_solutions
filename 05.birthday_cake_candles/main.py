def birthdayCakeCandles(candles):
	candleList = candles.copy()
	candleList.sort()
	tallest = list(filter(lambda e: (e == candleList[-1]), candleList))
	result = len(tallest)

	return result


input = [4, 3, 1, 4] # output 2 // There are 2 of the highest numbers ( in this case 4)
result = birthdayCakeCandles(input)

print(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
)
