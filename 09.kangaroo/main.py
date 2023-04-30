def kangaroo(x1, v1, x2, v2):
	answer = "NO"

	distance = x2 - x1
	jumpDifference = v1 - v2
	if distance <= 0 or jumpDifference <= 0:
		return answer

	isReachable = distance % jumpDifference == 0

	if isReachable:
		answer = "YES"

	return answer


# x1 = 43
# v1 = 2
# x2 = 70
# v2 = 2
x1 = 0
v1 = 3
x2 = 4
v2 = 2
input = [x1, v1, x2, v2]

result = kangaroo(x1, v1, x2, v2)

print(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
)

# this has a little different solution than in typescript and go