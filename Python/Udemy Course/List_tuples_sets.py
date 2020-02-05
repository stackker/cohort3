# clears the terminal screen 
print('\033c')

l= list_order_guaranteed = ['first', 'second', 'third']
s = set_uniq_no_Order_guaranteed = {'first', 'second', 'third'}
t = tuple_cannot_b_modified_anymore =('first', 'second', 'third')

print(f'operations permitted : ')
print(f'accessing an entity in the list : {list_order_guaranteed[1]}')
l.append('appended')
print(f'list after append":{l}')
l.remove('appended')
print(f'list after append":{l}')
s.add('added')
# though added again, it displays only once as No Duplicates Allowed in Sets
s.add('added')
print(f'set after addition : {s} Remember !! No guarantee on Order')

print(f'No Duplicates Allowed in Sets')
print('_' *40)
print(f'operations NOT permitted : ')
print('_' *40)
print(f'Appending to Tuple : ')
print(f'listing a nth element ina a set : ')