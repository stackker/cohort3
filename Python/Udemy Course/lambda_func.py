# clears the terminal screen 
print('\033c')

#  Lambda functions are short nameless functions defined wherer they are used.
#  Return statement is not used and can be assigned to variables, for 
#  Necessarily need to use Lambda as keyword

add = lambda x, y: x + y
print( add(2,3))

#  usually used with map functions

list_seq = [1, 2, 3, 4, 5, 6]
doubled_list = list(map(lambda x: (x * 2), list_seq))
print("Doubled: ",doubled_list)

