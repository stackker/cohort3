# clears the terminal screen 
print('\033c')

# pack args

def packArgs(*anyNoOfArgs):
    print("packedArgs: ",anyNoOfArgs)
packArgs(1, 2, 3, 4, 5, 6)

# ______________
# Unpacking Args
#___________________

def add(x, y):
    return x + y
    
num_list=[1,2]
print('List Add:', add(*num_list))

# if the args is in Dicts\
def add3(x, y,z):
    return x + y + z
num_dicts = {'x':10, 'y':30,'z':40}
print('Dict_Add3:', add3(**num_dicts))


# ---------------------------
#  Some quirks
#----------------------------
def mult(args):
    multVal = 1
    for arg in args:
        multVal = multVal * arg
    return multVal
        

def calcPackedArgs(*args, operator):
    print("args :", args)
    if operator == '*':
        return mult(args)
    elif operator == '+':
       return sum(args)
    else:
        return("Not a valid operator for this func")
    
# Cant provide it like below as operator gets considered part of the arg
# print(calcPackedArgs(1,2,3,'+'))

print("Sum: ", calcPackedArgs(1, 2, 3, operator='-'))
print("Sum2: ", calcPackedArgs(1, 2, 3, operator='+'))

print("Mult: ", calcPackedArgs(2, 2, 3, operator='*'))