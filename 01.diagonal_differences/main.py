def diagonalDifference(arr):
    totalL = 0
    totalR = 0
    for i in range(len(arr)):
        totalL += arr[i][i]
        totalR += arr[i][(i * -1) - 1]
        
    return abs(totalL - totalR)