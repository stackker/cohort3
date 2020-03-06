# clears the terminal screen 
print('\033c')

def func_name():
    # executable code here
    print("Executable code")

# call function declared as
func_name()

#  In Pythin functions can use veriables not in scope of the finction , (already declared Only)
#  The Function declaration must precede the place of  use.
#  defining local variable in a function and using itin the same statement is not allowed

# Arguments that received are assigned in sequence to parematers in the fuctions, mapped one to one.
# Arguments that need different sequence should assigned to parameters: these are called Named Parameters   
#  eg., sayHello(surname = 'Bob', firstName = "Jones") while 
#  def sayHello(name, surname)
# Positional argument  cannot precede a keywoed argument  as the sequence is lost 


# Default Paramenter
# A function can have a paramenter fixed to a certain value and can be overridden in the argument. 
def add(x, y=5):
    print("add fn: ", (x + y))

add(3)
add(3,7)
#  add(x=3,7) SyntaxError: positional argument follows keyword argument
# So default parameters should be listed in th end

#  Coding exercose Function:

def return_42():
    return 42
def my_function(x, y):
    return (x*y)
