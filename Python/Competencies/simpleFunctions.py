# clears the terminal screen 
print('\033c')



def email(name1, name2):
    return f"{name1.lower()}.{name2.lower()}@evolveu.com"


print(email("Larry", "Shumlich"))
