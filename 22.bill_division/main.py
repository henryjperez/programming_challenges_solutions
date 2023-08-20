# Remember to Import this at the root of the code
from functools import reduce


#
# Complete the 'bonAppetit' function below.
#
# The function accepts following parameters:
#  1. INTEGER_ARRAY bill
#  2. INTEGER k
#  3. INTEGER b
#
def bonAppetit(bill, k, b):
	total = reduce(lambda prev, current: prev + current, bill)
	totalSplit = int(total / 2)

	exceptionItem = bill[k]
	exceptionSplit = int(exceptionItem / 2)

	annaHasToPay = totalSplit - exceptionSplit
	annaCharge = b - annaHasToPay
	isAnnaOverCharged = annaCharge > 0

	print(annaCharge) if isAnnaOverCharged else print("Bon Appetit")


billInput1 = [3, 10, 2, 9]
indexKInput1 = 1
annaBillInput1 = 12

billInput2 = [3, 10, 2, 9]
indexKInput2 = 1
annaBillInput2 = 7

print(
	"Given this values:\n",
	billInput1, indexKInput1, annaBillInput1,
	"\nReturn:",
)
bonAppetit(billInput1, indexKInput1, annaBillInput1)

print(
	"Given this values:\n",
	billInput2, indexKInput2, annaBillInput2,
	"\nReturn:",
)
bonAppetit(billInput2, indexKInput2, annaBillInput2)
