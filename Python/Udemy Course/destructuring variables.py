# clears the terminal screen 
print('\033c')
#  Brackets are needed around tuples only if they need to be treated as one value
tupleX = (10, 11)
print("1: ", tupleX)

tupleX = 10, 11
print("2: ", tupleX)

tuple_List = [(2, 3), (5, 4), (7, 9)]
print("3: ", tuple_List[0])

t1 = tupleX
x, y = t1
print("4: ", y)

a, b, c = tuple_List
print("5: ", a)

set1 = {6, 7}
c,d = set1
print("6: ", d)

# head and tail needs to be hard coded to get this behaviour
# Using * to Collect Values
head, *tail = tuple_List
print("head: ", head)
print("tail*: ", tail)
*head,tail = tuple_List
print("*head: ", head)
print("tail: ", tail)

head, *middle, tail = [1, 2, 3, 4, 5]

print("head3: ",head)    # 1
print("middle: ",middle)  # [2, 3, 4]
print("tail3: ",tail)    # 5