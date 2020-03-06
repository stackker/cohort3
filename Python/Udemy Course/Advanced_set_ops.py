# clears the terminal screen 
print('\033c')

print('Set Operations Union  Int Difference')
print('_'*40)

set1 = {'one', 'two', 'three','items'}
set2 = {'one', 'two', 'three', 'seven'}
print(f'Difference1 :{set1.difference(set2)}')
print(f'Difference2 :{set2.difference(set1)}')
# Difference
set2 = {'one', 'two', 'four' ,'seven'}
print(f'Difference :{set1.difference(set2)}')
print(f'Difference :{set2.difference(set1)}')
# total = set1.union(set2)
print(f'Union1 :{set1.union(set2)}')
print(f'Union2 :{set2.union(set1)}')
#  Intersection
print(f'Intersection1 :{set1.intersection(set2)}')
print(f'Intersection2 :{set2.intersection(set1)}')

# set contains only one value in an element in { } but
# dictionaries contain key:value pairs in a {}, as in JS objects

