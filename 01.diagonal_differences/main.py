def diagonalDifference(arr):
    totalL = 0
    totalR = 0
    for i in range(len(arr)):
        totalL += arr[i][i]
        totalR += arr[i][(i * -1) - 1]
        
    return abs(totalL - totalR)


input = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]
result = diagonalDifference(input)
print(input, result, sep=" => ")
