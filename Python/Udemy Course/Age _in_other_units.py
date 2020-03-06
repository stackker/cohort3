# Write a program that asks the user for their age
# and tells them their age in seconds.

# Optionally, extend the program so it prints months,
# days, hours, and seconds.


age = input ("enter your age: ")
age_num = int(age)
print(f"your age in months: {age_num*12}")
print(f"your age in days: {age_num*365.24}")
print(f"your age in hours: {age_num*365*24}")
print(f"your age in seconds: {age_num*365*24*3600}")
