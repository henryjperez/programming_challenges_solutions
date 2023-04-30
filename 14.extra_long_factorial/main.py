def extraLongFactorials(n):
	factorial = 1
	for i in range(1, n + 1):
		factorial *= i

	print(factorial)

input = 25
print(
	"Given this values:\n",
	input,
	"\nResult:",
)
extraLongFactorials(input)