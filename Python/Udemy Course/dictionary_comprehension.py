# clears the terminal screen 
print('\033c')

#  Dictionary  is similar to JS objects
# How to use Dict:
#  say you need to validdate passwords for users from a database. Keep it ins server memory as Dicts, each data item being a tuple

userInfo_list = [
    (0, "Bob", "welcome"),
    (1, "Chris", "pass32"),
    (2, "Dufus", "biGMac24")
]

# assign each record to a key that we will use to search against

# user_mapping = list(map(lambda user: {user[1]:user}, userInfo_list))
# print(user_mapping)

# The list cannot be used for this as you have to refer to the list element as a array address(integer)

user_mapping = {user[1]: user for user in userInfo_list}
print(user_mapping)

username_input = input('Enter your UserName : ')
pword_input = input('Enter your Password : ')

# Destructuring the tuple
try:
    _, user, password = user_mapping[username_input] # Searches if the input user is in User mapping and destructures in one step. Eliminates the need for an if statement
    # print("password: ", password)
    if pword_input == password:
        print(f"you are welcome, {user}")
    else:
        print("Your  password is incorrect")


except KeyError:
    print("User Not found as Key")
except NameError:
    print("passwords dont match")







