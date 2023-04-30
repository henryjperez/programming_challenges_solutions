def gregorian(y):
	if ((y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)):
		return f"12.09.{y}"

	return f"13.09.{y}"

def julian(y):
	if y % 4 == 0:
		return f"12.09.{y}"

	return f"13.09.{y}"

def dayOfProgrammer(year):
    if year > 1918:
        return gregorian(year)
    elif year == 1918:
        return f"26.09.{year}"
    else:
        return julian(year)

input = 2017
result = dayOfProgrammer(input)

print(
	"Given this values:\n",
	input,
	"\nResult:",
	result,
)