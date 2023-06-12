#
# Complete the 'divisibleSumPairs' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER k
#  3. INTEGER_ARRAY ar
#
def divisibleSumPairs(n, k, ar):
	pairCount = 0
	for i in range(n):
		current = ar[i]
		for index in range(i + 1, n):
			next = ar[index]
			if (current + next) % k == 0:
				pairCount += 1

	return pairCount


ar = [1, 3, 2, 6, 1, 2]
n = len(ar)
k = 3

input = {"n": n, "k": k, "ar": ar}
result = divisibleSumPairs(n, k, ar)

print(
    "Given this values:\n",
    input,
    "\nReturn:\n",
    result,
)
