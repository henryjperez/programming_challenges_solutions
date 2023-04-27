def gradingStudents(grades):
	result = []
	for grade in grades:
		multiple = 5
		leftover = grade % multiple
		difference = multiple - leftover
		isRoundAndPassed = not difference >= 3 and not grade < 38

		if isRoundAndPassed:
			result.append(grade + difference)
		else:
			result.append(grade)

	return result


input = [73, 67, 38, 33,]
result = gradingStudents(input) # output[75, 67, 40, 33]

print(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
)
