def timeConversion(s):
	t = s[2: len(s)-2]
	h = s[:2]
	hour = int(h)
	time = (s[len(t)+2:]).upper()

	if time == "AM":
		if hour == 12:
			h = "00"

		return h + t

	if hour < 12:
		hour += 12

	return f"{hour}{t}"


input = "07:05:45PM"
result = timeConversion(input)

print(
    "Given this values:\n",
    input,
    "\nResult:",
    result,
)
