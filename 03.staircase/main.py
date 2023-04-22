def staircase(n):
	for i in range(n):
		print(((i + 1) * "#").rjust(n))

input = 6
print(input, "=>")
staircase(input)

""" 
Output:
     #
    ##
   ###
  ####
 #####
######
 """