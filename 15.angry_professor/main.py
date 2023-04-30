def angryProfessor(k, a):
	notLateCount = 0

	for studentArrival in a:
		if studentArrival <= 0:
			notLateCount += 1

	answer = "NO" if notLateCount >= k else "YES"
	return answer


k = 3
a = [-1, -3, 4, 2]
input = [k, a]

result = angryProfessor(k, a)

print(
    "Given this values:\n",
  		input,
  		"\nResult:",
  		result,
)