# clears the terminal screen 
print('\033c')
# ------------------
#  Pack into dict
# ------------------

def intoDict(**keyWordArgs): # use ** for dict pack and unpack
    print("KWordArgs: ", keyWordArgs)
    
intoDict(name1="Sea", name2="Salt")



# ------------------
#  UnPack from dict
# ------------------

def profile(name, age):
    print("kwargs: ", name, age)
    
person = {"name":'Kelly', "age":29}

# this wont work as the dict is considered as the first parameter
# profile(person)

profile(**person)

# ----------------------------------

def named(**kwargs): # pack
    print(kwargs)
def format_print(**kwargs):
    named(**kwargs)
    for arg, value in kwargs.items(): # unpack
        print(f'{arg}:{value}')
    
format_print(name='Enoch', age=365)

# -----------------------------------
#  Collecting positional ares into args and named into kwargs
# -----------------------------------

def both(*args, **kwargs):
        print(args)
        print(kwargs)

both(1,2,3,4,5,6, name= "Elijah", age=80) # seperates them neatly

#  this type of arrangement is used to accept an  unlimited numbar of arguments
    