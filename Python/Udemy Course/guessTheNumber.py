# clears the terminal screen 
print('\033c')


import random
gameON = input("If you would like to play a guessing game ,enter'y': ").lower()
while gameON == 'y':
   guessedNum = int(input("Enter a single Digit: "))
   targNum = int(random.random() * 10)
#    print(f"target: {targNum}")
   if guessedNum == targNum:
        print("Wow!! You got lucky")
   else: print(f"You were off by only {abs(guessedNum - targNum)}!")
   gameON = input ("Play again? Enter 'Y':  ").lower()
print("Bye!!")