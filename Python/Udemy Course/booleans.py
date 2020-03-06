# clears the terminal screen 
print('\033c')

#  IS is used to check if the pointers point to  the same memory location
print(' IS is used to check if the pointers point to  the same memory location')
print(' == is used to check if the CONTENTS of pointers are the SAME')
pointer1 = ['one', 'two,' 'three']
pointer2 = ['one','two,' 'three']

print(pointer1 == pointer2)
print(pointer1 is pointer2)

pointer2 = pointer1
print(pointer1 == pointer2)
print(pointer1 is pointer2)

print(' CAUTION: Do not use IS to avoid unwanted issues.')
